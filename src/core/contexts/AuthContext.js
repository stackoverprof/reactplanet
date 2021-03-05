import React,{ useContext,useState, useEffect } from 'react'
import { auth, db, googleProvider } from '../config/Firebase';

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [IsAdmin, setIsAdmin] = useState(false);

    async function signInWithGoogle(){
        googleProvider.addScope('profile');
        googleProvider.addScope('email');
        return auth.signInWithPopup(googleProvider).then((result)=>{
            if(result.additionalUserInfo.isNewUser){
                db.collection("Profile").doc(result.user.uid).set({
                    uid : result.user.uid,
                    displayName : result.user.displayName,
                    photoURL : result.user.photoURL,
                    topik: [],
                    komunitas: [],
                    progress: [],
                })
                .then(function() {
                    console.log("Document successfully written!");
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    function logout() {
        return auth.signOut( )
    }

    useEffect(()=>{
        const unsubcribe =  auth.onAuthStateChanged(user=>{
            if(user){
                user.getIdTokenResult().then(res=>{
                    if (res.claims.admin) {
                        setIsAdmin(true)
                    }else{
                        setIsAdmin(false)
                    }
                    setCurrentUser(user)
                    setLoading(false)
                })
            }else{
                setIsAdmin(false)
                setCurrentUser(user)
                setLoading(false)
            }
        })
        return unsubcribe;
    },[])

    const value = {
        currentUser,
        IsAdmin,
        logout,
        signInWithGoogle
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
