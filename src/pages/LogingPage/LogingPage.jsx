import backgroundImg from "../../assets/backGround.jpg"
import LoginCard from '../../common/component/LoginCard/LoginCard';
import { Box } from "@mui/material";

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

            <LoginCard/>

        </Box>

    );
}
