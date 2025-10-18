import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Dialog, DialogContent, TextField, Card, CardContent, Typography } from '@mui/material';
import AddButton from "../AddButton/AddButton";
import DeleteButton from '../DeleteButton.jsx/DeleteButton';
import UpdateButton from '../UpdeteButton/UpdateButton';
import LogoutButton from '../LogoutButton/LogoutButton';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ViewAllTable(props) {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllStudents = () => {
    const token = localStorage.getItem("afsd-9");
    if (!token) {
      return;
    }
    setLoading(true);
    axios
      .get("https://student-api.acpt.lk/api/student/getAll", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;

  return (
    <Box sx={{ p: 3 }}>

        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <LogoutButton />
          <AddButton onStudentAdded={fetchAllStudents} />
        </Box>



      {/* Table Section */}
      <TableContainer component={Paper} sx={{ maxHeight: 560, overflow: 'auto' }} >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell>Student Name</StyledTableCell>
              <StyledTableCell align="right">Id</StyledTableCell>
              <StyledTableCell align="right">Age</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Contact</StyledTableCell>
              <StyledTableCell align="right">Update / Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <StyledTableRow key={student.id}>
                <StyledTableCell>{student.student_name}</StyledTableCell>
                <StyledTableCell align="right">{student.id}</StyledTableCell>
                <StyledTableCell align="right">{student.student_age}</StyledTableCell>
                <StyledTableCell align="right">{student.student_address}</StyledTableCell>
                <StyledTableCell align="right">{student.student_contact}</StyledTableCell>
                <StyledTableCell align="right">

                  <UpdateButton updateId={student.id} student={student} onUpdate={fetchAllStudents} />

                  <DeleteButton studentId={student.id} onDeleted={fetchAllStudents} />


                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  );
}
