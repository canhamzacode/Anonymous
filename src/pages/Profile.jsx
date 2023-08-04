import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useGetUserByUsername from '../hooks/useGetUserByUsername';
import SameUser from '../components/SameUser';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [profileState, setProfileState] = useState('loading');

    const userProfile = useGetUserByUsername(id);

    useEffect(() => {
        const checkUserProfile = async () => {
            if (user && id === user.username) {
                setProfileState('logged');
            } else if (userProfile) {
                setProfileState('exists');
            } else {
                setProfileState('not_exists');
            }
        };

        checkUserProfile();
    }, [id, user, userProfile]);

    if (profileState === 'loading') {
        return <p>Loading...</p>;
    } else if (profileState === 'logged') {
        return <SameUser profile={userProfile} />;
    } else if (profileState === 'exists') {
        // You can choose to render the SameUser component with the userProfile data.
        // return <SameUser profile={userProfile} />;
        return <p>User Profile Exists!</p>;
    } else {
        // Render a component indicating that the profile doesn't exist.
        return <p>User Profile Not Found</p>;
    }
};

export default Profile;