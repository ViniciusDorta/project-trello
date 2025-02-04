import NavBar from "./components/NavBar";
import Kanban from "./components/Kanban";
import { Box } from "@mui/material";

export default function Principal() 
{
    return(
        <Box sx={{ backgroundImage: "linear-gradient(45deg, #8587f3 30%, #fd84ae 100%)" }}>
            <NavBar />
            <Kanban />
        </Box>
    );
}