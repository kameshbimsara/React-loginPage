import { Box, Card, CardActions, CardContent, CircularProgress, SvgIcon, Typography } from "@mui/material";
import backgroundImg from "../../assets/backGround.jpg"
import RegisterCard from "../../common/component/RegisterCard/RegisterCard";

export default function RegisterPage() {

    return (

        <Box
            sx={{
                height: "100vh",
                backgroundImage: `url(${backgroundImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

                <RegisterCard/>
        </Box>



    );
}
