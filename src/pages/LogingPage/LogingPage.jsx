import React from 'react'
import backgroundImg from "../../assets/backGround.jpg"
import Box from '@mui/material/Box';
import LoginCard from '../../common/component/LoginCard/LoginCard';

export default function LogingPage() {
    return (

        <Box
            sx={{
                height: "100vh",
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <LoginCard />

        </Box>

    )
}
