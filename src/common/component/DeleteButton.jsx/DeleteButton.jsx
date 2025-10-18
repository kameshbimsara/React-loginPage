import React, { useState } from 'react';
import { Box, Dialog, DialogActions, DialogTitle, Button } from '@mui/material';
import axios from 'axios';

export default function DeleteButton({ studentId, onDeleted }) {

    const [openDialog, setOpenDialog] = useState(false);

    const handleDeleteClick = () => {
        setOpenDialog(true);
    };

    const handleDeleteConfirm = () => {
        const token = localStorage.getItem("afsd-9");
        if (!token || !studentId) return;

        axios
            .delete(`https://student-api.acpt.lk/api/student/delete/${studentId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => {
                if (onDeleted) onDeleted();
                setOpenDialog(false);
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
                setOpenDialog(false);
            });
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    return (
        <Box component="span">
            <Button variant="contained" color="error" size="small" onClick={handleDeleteClick}>
                Delete
            </Button>

            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Are you sure you want to delete this student?</DialogTitle>
                <DialogActions sx={{ justifyContent: 'center', mb: 1 }}>
                    <Button variant="contained" color="error" onClick={handleDeleteConfirm}>Yes</Button>
                    <Button variant="outlined" onClick={handleDialogClose}>No</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
