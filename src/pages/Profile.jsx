import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useGetUserByUsername from '../hooks/useGetUserByUsername';
import SameUser from '../components/SameUser';
import ProfileNotFound from '../components/ProfileNotFound';
import SaySomething from '../components/SaySomething';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [profileState, setProfileState] = useState('loading');
    const [profileCheckComplete, setProfileCheckComplete] = useState(false);

    const userProfile = useGetUserByUsername(id);

    useEffect(() => {
        const checkUserProfile = async () => {
            const data = () => {
                if (user && id === user.username) {
                    setProfileState('logged');
                } else if (userProfile) {
                    setProfileState('exists');
                } else {
                    setProfileState('not_exists');
                }
            }
            data();
            // Mark the profile check as complete
            setProfileCheckComplete(true);
        };
        checkUserProfile();
    }, [id, user, userProfile]);

    // Render the loading state until the profile check is complete
    if (!profileCheckComplete) {
        return <p>Loading...</p>;
    }

    // Now, check the profile state and render the appropriate component
    if (profileState === 'logged') {
        return <SameUser profile={userProfile} />;
    } else if (profileState === 'exists') {
        return <SaySomething name={id} email={userProfile.email} />;
    } else {
        return <ProfileNotFound username={id} />;
    }
};

export default Profile;