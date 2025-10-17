import { Box, TextField, Button } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function RegisterCard() {
  return (

     <Box sx={{ '& > :not(style)': { m: 3 } , display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
      
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: '#bbdefb', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" sx={{width: "250px" , input:{color:"#bbdefb"} , label: { color: "#bbdefb" } , "& .MuiInput-underline:before": { borderBottomColor: "#bbdefb" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:after": { borderBottomColor: "#42a5f5" }, }}  />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: '#bbdefb', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" sx={{width: "250px" , input:{color:"#bbdefb"} , label: { color: "#bbdefb" } , "& .MuiInput-underline:before": { borderBottomColor: "#bbdefb" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:after": { borderBottomColor: "#42a5f5" }, }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: '#bbdefb', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" sx={{width: "250px" , input:{color:"#bbdefb"} , label: { color: "#bbdefb" } , "& .MuiInput-underline:before": { borderBottomColor: "#bbdefb" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "white" },
            "& .MuiInput-underline:after": { borderBottomColor: "#42a5f5" }, }}  />
      </Box>
      <Box>
         <Button
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
        Register
      </Button>
      </Box>

    </Box>

  );
}
