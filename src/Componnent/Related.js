import { Box, Typography } from "@mui/material";
import stock from "../Images/stock.jpeg"
// import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import man from "../Images/man.jpg"
import { Stack} from '@mui/material';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from "../Componnent/Card"


const Related = () => {
const item = [{img:stock, game:"Games", navi:"Nvidia Release New Way Of Producing NFTs", des:"Craving something tangy, sticky, and a bit sweet? These Korean style pork chops are your answer. They’re ready in under 40 minutes, including marinating time, and they’re incredibly satisfying"}]
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
    return ( 
        <Box>
        <Box sx={{mt:"50px"}}>
            <Typography sx={{textAlign:"center", fontWeight:"bold"}}>RELATED ARTICLES</Typography>
        </Box>
        <Box sx={{ mt:"5%", ml:"60px", mr:"40px"  }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={1} sm={4} md={4} key={index}>
           
            {item.map((Item) => (
        <Typography key={Item} >
            <img src={Item.img} alt="net" style={{ maxWidth: '90%', height: 'auto',  borderRadius: "10px", overflow: "hidden", textAlign:"justify" }} />
                <Typography sx={{color:"blue", mb:"20px", fontWeight:"bold"}}>{Item.game}</Typography>
                <Typography sx={{color:"black", mb:"20px", fontWeight:"bold", fontSize:"20px", cursor:"pointer"}}>{Item.navi}</Typography>
                <Typography sx={{color:"black", mb:"20px", textAlign:"justify", mr:"30px"}}>{Item.des}</Typography>
         <Stack direction="row" spacing={2}>
         <Box><Avatar alt="Travis Howard" src={man} /></Box>
         <Stack>
         <Box>
           <Typography sx={{color:"black",  fontWeight:"bold"}}>Super A. Anam</Typography>
           <Typography>June 11, 2022</Typography>
         </Box>
         </Stack>
       </Stack>
        </Typography>
    ))}
            
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box> <Card /></Box>
        </Box>
     );
}
 
export default Related;