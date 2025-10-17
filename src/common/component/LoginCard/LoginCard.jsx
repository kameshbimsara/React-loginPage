import { Box, TextField, Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

export default function LoginCard() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function loginAction() {

        axios.post('https://student-api.acpt.lk/api/login', {
            email: userName,
            password: password,
        })
            .then(function (response) {
                console.log(response.data.token)
                localStorage.setItem('afsd-9', response.data.token)
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    return (

        <Box sx={{ '& > :not(style)': { m: 3 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: '#bbdefb', mr: 1, my: 0.5 }} />
                <TextField onChange={(val) => {
                    setUserName(val.target.value)
                }}
                    id="input-with-sx" label="UserName" variant="standard" sx={{
                        width: "250px", input: { color: "#bbdefb" }, label: { color: "#bbdefb" }, "& .MuiInput-underline:before": { borderBottomColor: "#bbdefb" },
                        "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
                        "& .MuiInput-underline:after": { borderBottomColor: "#42a5f5" },
                    }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: '#bbdefb', mr: 1, my: 0.5 }} />
                <TextField onChange={(val) => {
                    setPassword(val.target.value)
                }}
                    id="input-with-sx" label="Password" variant="standard" sx={{
                        width: "250px", input: { color: "#bbdefb" }, label: { color: "#bbdefb" }, "& .MuiInput-underline:before": { borderBottomColor: "#bbdefb" },
                        "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
                        "& .MuiInput-underline:after": { borderBottomColor: "#42a5f5" },
                    }} />
            </Box>
            <Box>
                <Button
                    onClick={loginAction}
                    variant="contained"
                    sx={{
                        width: "150px",
                        mt: 2,
                        backgroundColor: "#42a5f5", // matches underline color
                        color: "#fff",
                        "&:hover": { backgroundColor: "#1e88e5" },
                        borderRadius: "8px",
                        textTransform: "none",
                        fontWeight: "bold",
                    }}
                >
                    Login
                </Button>
            </Box>

             <p style={{
                marginTop: "100px",
                textAlign: "center"
            }}>
                Go to register Page?{" "}
                <Link to="/register" style={{ color: "blue", textDecoration: "underline" }}>
                    Register here
                </Link>
            </p>

        </Box>

    );
}
