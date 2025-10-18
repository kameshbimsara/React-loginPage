import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("afsd-9");
        navigate("/login");
    };

    return (
        <Button variant="contained" color="primary" onClick={handleLogout} sx={{height: 40,}} >
            Logout
        </Button>
    )
}
