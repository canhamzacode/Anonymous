import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { AuthContext } from '../providers/AuthProvider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Messages = () => {
    const { user } = useContext(AuthContext);
    let currentURL = `https://noface.vercel.app/${user?.username}`
    const [userComments, setUserComments] = useState([]);

    const getUserComments = async () => {
        try {
            const commentCollection = collection(db, 'comment');
            const q = query(commentCollection, where('linkOwner', '==', user?.username));
            const commentsSnapshot = await getDocs(q);

            const commentsData = [];
            commentsSnapshot.forEach((doc) => {
                const { linkOwner, content } = doc.data();
                const comment = { id: doc.id, linkOwner, content };
                commentsData.push(comment);
            });

            setUserComments(commentsData);
        } catch (error) {
            console.error('Error fetching user comments:', error);
        }
    };

    useEffect(() => {
        console.log(currentURL);
        getUserComments();
    }, [user]);

    // console.log('User Comments:', userComments);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: { md: "40px", xs: "20px" }, minHeight: "80vh", gap: "30px" }}>
            <Typography variant='h4' sx={{ fontSize: "30px", color: "#fff" }}>
                My Messages
            </Typography>
            {userComments.length > 0 ? userComments.map((comment) => (
                <Stack key={comment?.id} direction="column" sx={{ width: "100%", background: "", gap: "10px" }}>
                    <Box sx={{ width: "100%", padding: "0 10px", background: "#fff", borderRadius: "5px", display: "grid", alignItems: "center" }}>
                        <Box sx={{ width: "100%", padding: "10px", background: "#fff", borderRadius: "5px", display: "flex", alignItems: "center", gap: "25px", flexWrap: "wrap" }} >
                            <Box sx={{ width: { md: "60px", xs: "50px" }, height: { md: "60px", xs: "50px" }, background: "#000", padding: "10px", borderRadius: "5px", display: "flex" }} className='bulb'>
                                <TipsAndUpdatesIcon sx={{ fontSize: { md: "40px", xs: "25px" }, color: "#fff" }} />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontSize: "15px" }}>
                                    From Annonymous:
                                </Typography>
                                <Typography variant='h6'>
                                    {comment?.content}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            )) : (
                <Stack direction="column" sx={{ width: "100%", background: "", gap: "10px" }}>
                    <Typography variant='h5' sx={{ color: "#fff" }}> You Dont Have Any Comment Yet</Typography>
                    <Link to={`https://api.whatsapp.com/send?text=Write%20a%20*secret%20anonymous%20message*%20for%20me..%20%F0%9F%98%89%20I%20*won%27t%20know*%20who%20wrote%20it..%20%F0%9F%98%82%E2%9D%A4%20%F0%9F%91%89%20${currentURL}`} className='w-full bg-black rounded-md'>
                        <Button sx={{ color: "#fff", display: "flex", marginX: "auto", gap: "20px" }}  >
                            <span>Share On Whatsapp</span>
                            <WhatsAppIcon />
                        </Button>
                    </Link>
                </Stack>
            )}
        </Box>
    );
};

export default Messages;