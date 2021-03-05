import { DB } from './init'


//LISTENER - Realtime
const profile = (uid, action) => {
    return DB.collection('Users').doc(uid).onSnapshot(action.attach, action.detach)
}

export default {
    listen : {
        profile
    }
}