import React, { useContext, useEffect, useState } from 'react'
import { AUTH, GoogleAUTH } from '@core/services/firebase'
import FireFetcher from '@core/services/FireFetcher'

const firebaseAuth = React.createContext()

const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState('initial')   //initial/user/guest
    const [user, setUser] = useState({})
    const [profile, setProfile] = useState({})
    const [access, setAccess] = useState({})
    const [isNew, setIsNew] = useState(false)
    const [errorAuth, setErrorAuth] = useState('')

    const authMethods = {
        google : () => {
            GoogleAUTH.addScope('profile')
            GoogleAUTH.addScope('email')

            const handleSignUp = async (res) => {
                //initial db insertion
                console.log(res)
                setIsNew(true)
            }

            return AUTH.signInWithPopup(GoogleAUTH).then(async res => {
                if (res.additionalUserInfo.isNewUser) {
                    handleSignUp(res)
                }
                setUser(res.user)
            })
            .catch(err => setErrorAuth(err.code))
        },

        signOut : () => {
            setIsNew(false)
            return AUTH.signOut()
        }
    }
    
    const listenUserData = (uid) => {
        FireFetcher.listen.userData(uid, {
            attach: (doc) => {
                setProfile(doc.data())
            },
            detach: () => {
                setProfile({})
            }
        })
    }

    useEffect(() => {
        const unsubscribe = AUTH.onAuthStateChanged(async user => {
            if(user) {
                setAccess({ admin: await user.getIdTokenResult().then(res => res.claims.admin)})
                listenUserData(user.uid)
                setUser(user) 
                setAuthState('user')
            } else {
                setAuthState('guest')
                setAccess({})
                setUser({})
                setIsNew(false)
            }
        })
        return unsubscribe
    }, [])

    return (
        <firebaseAuth.Provider value={{
            authMethods,
            authState,
            user,
            isNew,
            access,
            profile,
            errorAuth,
            setErrorAuth
        }}>
            { children }
        </firebaseAuth.Provider>
    )
}

export default AuthProvider
export const useAuth = () => useContext(firebaseAuth)