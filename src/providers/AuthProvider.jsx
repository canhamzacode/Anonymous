import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import useGetUserById from '../hooks/useGetUserById';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user] = useAuthState(auth);
    const [myUserDb, setMyUserDb] = useState(null)

    const handleLogOut = () => {
        auth.signOut();
        setMyUserDb(null)
    }

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         if (user) {
    //             const userId = user.uid;

    //             setMyUserDb(a);
    //         } else {
    //             setMyUserDb(null);
    //         }
    //     };

    //     fetchUser();
    // }, [user, a]);

    const authContextValue = {
        user: myUserDb,
        logout: handleLogOut,
        setMyUserDb
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }