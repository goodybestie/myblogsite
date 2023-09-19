import { Stack, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import man from "../Images/man.jpg"
// import { IconName } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Second = () => {
    return ( 
        <Stack sx={{mt:"2rem", backgroundColor:"#071952", padding:"60px"}}>
        <Box sx={{display:"flex",  justifyContent:"space-between",   mb:"5px", mt:"-20px" }}>
                <Typography sx={{color:"blue",  fontWeight:"bold"}}>Games</Typography>
                <Stack direction="row" spacing={2} color="#fff" fontWeight="bold" fontSize="40px" mr="6rem" >
         <Box>  <FaInstagram/>         </Box>
         <Box>  <FaTwitter/>         </Box>
         <Box>  <FaLinkedinIn/>         </Box>
         
       </Stack> 
            </Box>

        <Box sx={{display:"flex",  justifyContent:"space-between",   mb:"20px" }}>
           <Typography sx={{color:"#fff",  fontWeight:"bold", fontSize:"20px"}}>Nvidia Release New Way Of Producing NFTs</Typography>
           <Stack direction="row" spacing={2}>
         <Box><Avatar alt="Travis Howard" src={man} /></Box>
         <Stack>
         <Box sx={{mr:"5rem"}}>
           <Typography sx={{color:"#fff",  fontWeight:"bold"}}>Super A. Anam</Typography>
           <Typography sx={{color:"#fff"}}>June 11, 2022</Typography>
         </Box>
         </Stack>
       </Stack> 
        </Box>
        </Stack>
     );
}
 
export default Second;