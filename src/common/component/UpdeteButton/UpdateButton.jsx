import React, { useState } from "react";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, } from "@mui/material";
import axios from "axios";

export default function UpdateButton({ updateId, student, onUpdate }) {

    const [openDialog, setOpenDialog] = useState(false);
    const [formData, setFormData] = useState({
        student_name: "",
        student_age: "",
        student_address: "",
        student_contact: "",
    });

    const handleOpen = () => {
        setFormData({
            student_name: student.student_name,
            student_age: student.student_age,
            student_address: student.student_address,
            student_contact: student.student_contact,
        });
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleUpdate = () => {
        const token = localStorage.getItem("afsd-9");
        if (!token) return;

        axios
            .put(`https://student-api.acpt.lk/api/student/update/${updateId}`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => {
                if (onUpdate) onUpdate();
                setOpenDialog(false);
            })
            .catch((error) => {
                console.error("Error updating student:", error);
                setOpenDialog(false);
            });
    };

    return (

        <Box component="span">
            <Button
                variant="contained"
                color="warning"
                size="small"
                onClick={handleOpen}
                sx={{ mr: 1 }}
            >
                Update
            </Button>

            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle sx={{ textAlign: "center", fontWeight: "bold" }}>
                    Update Student Details
                </DialogTitle>

                <DialogContent>
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Student Name"
                        name="student_name"
                        value={formData.student_name}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Age"
                        name="student_age"
                        value={formData.student_age}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Address"
                        name="student_address"
                        value={formData.student_address}
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Contact"
                        name="student_contact"
                        value={formData.student_contact}
                        onChange={handleChange}
                    />
                </DialogContent>

                <DialogActions sx={{ justifyContent: "center", mb: 1 }}>
                    <Button variant="contained" color="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>

    );
}
