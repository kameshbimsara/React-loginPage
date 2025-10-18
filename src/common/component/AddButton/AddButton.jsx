import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Dialog, DialogContent, TextField, Card, CardContent, Typography } from '@mui/material';

export default function AddButton({ onStudentAdded }) {

    const [open, setOpen] = useState(false);
    const [Student, setStudent] = useState({
        student_name: '',
        student_age: '',
        student_address: '',
        student_contact: ''
    });

    const handleAddStudent = () => {
        const token = localStorage.getItem("afsd-9");

        if (!Student.student_name || !Student.student_age) {
            alert("Please fill all required fields!");
            return;
        }

        axios
            .post("https://student-api.acpt.lk/api/student/save", Student, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(() => {
                // alert("Student added successfully!");
                setOpen(false);
                setStudent({
                    student_name: "",
                    student_age: "",
                    student_address: "",
                    student_contact: "",
                });
                console.log("Student added, calling callback...");
                onStudentAdded?.();
            })
            .catch((error) => {
                console.error("Error adding student:", error);
                alert("Failed to add student!");
            });
    };

    return (

        <Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#f50804ff',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        '&:hover': {
                            backgroundColor: '#070000ff',
                        },
                    }}
                    onClick={() => setOpen(true)}
                >
                    + Add Student
                </Button>
            </Box>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <Card sx={{ minWidth: 400, textAlign: 'center', p: 2 }}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Add New Student
                            </Typography>

                            <TextField
                                fullWidth
                                label="Student Name"
                                variant="outlined"
                                margin="normal"
                                value={Student.student_name}
                                onChange={(e) => setStudent({ ...Student, student_name: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                label="Student Age"
                                variant="outlined"
                                margin="normal"
                                value={Student.student_age}
                                onChange={(e) => setStudent({ ...Student, student_age: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                label="Student Address"
                                variant="outlined"
                                margin="normal"
                                value={Student.student_address}
                                onChange={(e) => setStudent({ ...Student, student_address: e.target.value })}
                            />
                            <TextField
                                fullWidth
                                label="Student Contact"
                                variant="outlined"
                                margin="normal"
                                value={Student.student_contact}
                                onChange={(e) => setStudent({ ...Student, student_contact: e.target.value })}
                            />

                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                                <Button variant="contained" color="success" onClick={handleAddStudent}>
                                    Save
                                </Button>
                                <Button variant="outlined" color="error" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </DialogContent>
            </Dialog>

        </Box>


    )
}
