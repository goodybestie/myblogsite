import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import { Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import stock from "../Images/stock.jpeg"
import man from "../Images/man.jpg"
import {Link} from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
const  Grid = ({searchValue}) => {
  const list = useMemo(() => [
    {
      img: stock,
      game: 'Games',
      navi: 'Nvidia Release New Way Of Producing NFTs',
      des: 'Craving something tangy, sticky, and a bit sweet? These Korean style pork chops are your answer. They’re ready in under 40 minutes, including marinating time, and they’re incredibly satisfying',
    },
  ], []);
  const [filteredItems, setFilteredItems] = useState([]);
  
  useEffect(() => {
    const filtered = list.filter((item) => {
      const game = item.game ? item.game.toLowerCase() : '';
      const navi = item.navi ? item.navi.toLowerCase() : '';
      const des = item.des ? item.des.toLowerCase() : '';
      
      // Ensure searchValue is a string before calling toLowerCase()
      const searchStr = (searchValue || '').toString().toLowerCase();
  
      return (
        game.includes(searchStr) ||
        navi.includes(searchStr) ||
        des.includes(searchStr)
      );
    });
  
    setFilteredItems(filtered);
  }, [list, searchValue]);
  
  return ( 

//          <Stack >
//   {         
//       list.map((List => (

//         <Box sx={{ width: "30rem", mt: "50px", border: "none" }}>
//         <Box
//           display="grid"
//           gridTemplateColumns={{ xs: "1fr", md: "repeat(15, 1fr)" }}
//           gap={13}
//           key={List}
//         >
//           <Box gridColumn={{ xs: "span 12", md: "span 9" }}>
//           <Box
//   sx={{
//     ml: "40px",
//     height: "20rem",
//     borderRadius: "40px",
//     overflow: "hidden",
//     "@media (max-width: 768px)": {
//       height: "30rem",
//       width:"18rem",
     
//       pr:"20px"
     
//       // Adjust the height to be auto on mobile screens
//     },
//   }}
// >
//   <Link href="/singlepage">
//     <img src={List.img} width="100%" />
//   </Link>
// </Box>

//           </Box>
//           <Box gridColumn={{ xs: "span 12", md: "span 4" }}  >
//             <Box sx={{ textAlign: "justify" }} 
//             marginTop={{ xs:"-30%", md:"1%"}}
//             marginLeft={{xs:"20px"}}
//             px={{xs:"20px", md:"1px"}} 
//             width={{xs:"25%", md:"100%"}}>
//               <Typography sx={{ color: "blue", mb: "20px", fontWeight: "bold" }}>{List.game}</Typography>
//               <Typography
//   sx={{
//     color: "black",
//     mb: "20px",
//     fontWeight: "bold",
//     fontSize: "20px",
//     cursor: "pointer",
//   }}
// >
//   {List.navi}
// </Typography>

//               <Typography sx={{ color: "black", mb: "20px" }}>{List.des}</Typography>
//               <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
//                 <Box><Avatar alt="Travis Howard" src={man} /></Box>
//                 <Stack>
//                   <Box>
//                     <Typography sx={{ color: "black", fontWeight: "bold" }}>Super A. Anam</Typography>
//                     <Typography>June 11, 2022</Typography>
//                   </Box>
//                 </Stack>
//               </Stack>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
      
//       )))
//     }
//          </Stack> 

<Box >


  
  {searchValue ? (
     filteredItems.length === 0 ? (
      <Typography  sx={{mt:{md:"20%", xs:"30%"},   textAlign:"center"}}>Items not available</Typography>
    ) : (
          filteredItems.map((List, index) => (
            
            <Box sx={{ width: "30rem", mt: "50px", border: "none" }}>
            <Box
              display={{md:"grid", xs:"none"}}
              gridTemplateColumns={{ xs: "1fr", md: "repeat(15, 1fr)" }}
              gap={13}
              key={index}
            >
              <Box gridColumn={{ xs: "span 12", md: "span 9" }}>
              <Box
      sx={{
        ml: "40px",
        height: "20rem",
        borderRadius: "40px",
        overflow: "hidden",
        "@media (max-width: 768px)": {
          height: "30rem",
          width:"18rem",
         
          pr:"20px"
         
          // Adjust the height to be auto on mobile screens
        },
      }}
    >
      <Link to="/singlepage">
        <img src={List.img} alt="net" width="100%" />
      </Link>
    </Box>
    
              </Box>
              <Box gridColumn={{ xs: "span 12", md: "span 4" }}  >
                <Box sx={{ textAlign: "justify" }} 
                marginTop={{ xs:"-30%", md:"1%"}}
                marginLeft={{xs:"20px"}}
                px={{xs:"20px", md:"1px"}} 
                width={{xs:"25%", md:"100%"}}>
                  <Typography sx={{ color: "blue", mb: "20px", fontWeight: "bold" }}>{List.game}</Typography>
                  <Typography
      sx={{
        color: "black",
        mb: "20px",
        fontWeight: "bold",
        fontSize: "20px",
        cursor: "pointer",
      }}
    >
      {List.navi}
    </Typography>
    
                  <Typography sx={{ color: "black", mb: "20px" }}>{List.des}</Typography>
                  <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                    <Box><Avatar alt="Travis Howard" src={man} /></Box>
                    <Stack>
                      <Box>
                        <Typography sx={{ color: "black", fontWeight: "bold" }}>Super A. Anam</Typography>
                        <Typography>June 11, 2022</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
          ))
      )

        ) : (
    <Box >
     { list.map((List, index) => (
           <Box sx={{ width: "30rem", mt: "50px", border: "none" }}>
           <Box
             display={{md:"grid", xs:"none"}}
             gridTemplateColumns={{ xs: "1fr", md: "repeat(15, 1fr)" }}
             gap={13}
             key={index}
           >
             <Box gridColumn={{ xs: "span 12", md: "span 9" }}>
             <Box
     sx={{
       ml: "40px",
       height: "20rem",
       borderRadius: "40px",
       overflow: "hidden",
       "@media (max-width: 768px)": {
         height: "30rem",
         width:"18rem",
        
         pr:"20px"
        
         // Adjust the height to be auto on mobile screens
       },
     }}
   >
     <Link to="/singlepage">
       <img src={List.img} alt="net" width="100%" />
     </Link>
   </Box>
   
             </Box>
             <Box gridColumn={{ xs: "span 12", md: "span 4" }}  >
               <Box sx={{ textAlign: "justify" }} 
               marginTop={{ xs:"-30%", md:"1%"}}
               marginLeft={{xs:"20px"}}
               px={{xs:"20px", md:"1px"}} 
               width={{xs:"25%", md:"100%"}}>
                 <Typography sx={{ color: "blue", mb: "20px", fontWeight: "bold" }}>{List.game}</Typography>
                 <Typography
     sx={{
       color: "black",
       mb: "20px",
       fontWeight: "bold",
       fontSize: "20px",
       cursor: "pointer",
     }}
   >
     {List.navi}
   </Typography>
   
                 <Typography sx={{ color: "black", mb: "20px" }}>{List.des}</Typography>
                 <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                   <Box><Avatar alt="Travis Howard" src={man} /></Box>
                   <Stack>
                     <Box>
                       <Typography sx={{ color: "black", fontWeight: "bold" }}>Super A. Anam</Typography>
                       <Typography>June 11, 2022</Typography>
                     </Box>
                   </Stack>
                 </Stack>
               </Box>
             </Box>
           </Box>
         </Box>
      
      ))}
    </Box>
          )}
</Box>


     );
}
 
export default Grid;