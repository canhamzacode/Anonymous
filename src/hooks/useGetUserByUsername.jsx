import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useGetUserByUsername = (username) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const usersRef = collection(db, 'userRef');
                const querySnapshot = await getDocs(
                    query(usersRef, where('username', '==', username))
                );

                if (!querySnapshot.empty) {
                    // User found, set the user data
                    const userDoc = querySnapshot.docs[0];
                    setUser(userDoc.data());
                } else {
                    // User not found, set user data to null
                    setUser(null);
                }
            } catch (error) {
                console.error('Error getting user:', error);
                setUser(null);
            }
        };

        if (username) {
            fetchUser();
        } else {
            setUser(null);
        }
    }, [username]);
    return user;
};

export default useGetUserByUsername;