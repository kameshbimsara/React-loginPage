import { Box } from '@mui/material'
import React from 'react'
import backgroundImg from "../../assets/backGround.jpg"
import ViewAllTable from '../../common/component/viewAllTable/viewAllTable'

export default function HomePage() {
    return (
        <Box

            sx={{
                height: "100vh",
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

        >
            <ViewAllTable />
        </Box>
    )
}
