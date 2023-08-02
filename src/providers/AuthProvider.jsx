import React, { createContext, useState } from 'react'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user] = useAuthState(auth);
    const [myUserDb, setMyUserDb] = useState(null)

    const handleLogOut = () => {
        auth.signOut();
        setMyUserDb(null)
    }

    return (
        <div>AuthProvider</div>
    )
}

export default { AuthProvider, AuthContext }