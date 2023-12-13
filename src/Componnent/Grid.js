

import * as React from 'react';
// import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import stock from "../Images/stock.jpeg"
import man from "../Images/man.jpg"

const initialItems = [
  { img: stock, game: "Games", navi: "Nvidia Release New Way Of Producing NFTs", des: "Craving something tangy, sticky, and a bit sweet? These Korean style pork chops are your answer. They’re ready in under 40 minutes, including marinating time, and they’re incredibly satisfying" }
];

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function ResponsiveGrid({ searchValue }) {
  const [filteredItems, setFilteredItems] = useState([]);
  
  useEffect(() => {
    const filtered = initialItems.filter((item) => {
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
  }, [searchValue]);
  

  return (
    
      <Box sx={{ mt: "10%", ml: "60px", mr: "40px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {searchValue ? (
            filteredItems.map((item, index) => (
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                  <Grid item xs={2} sm={4} md={4} key={index}>
                <Box key={index}>
                  <Link to="/singlepage">
                    <img src={item.img} alt="net" style={{ maxWidth: '90%', height: 'auto', borderRadius: "10px", overflow: {md:"hidden", xs:"hidden"}, textAlign: "justify" }} />
                  </Link>
                  <Typography sx={{ color: "blue", mb: "20px", fontWeight: "bold" }}>{item.game}</Typography>
                  <Typography sx={{ color: "black", mb: "20px", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>{item.navi}</Typography>
                  <Typography sx={{ color: "black", mb: "20px", textAlign: "justify", mr: "30px" }}>{item.des}</Typography>
                  <Stack direction="row" spacing={2}>
                    <Box><Avatar alt="Travis Howard" src={man} /></Box>
                    <Stack>
                      <Box>
                        <Typography sx={{ color: "black", fontWeight: "bold" }}>Super A. Anam</Typography>
                        <Typography>June 11, 2022</Typography>
                      </Box>
                    </Stack>
                  </Stack>
                  </Box>
                </Grid>
              ))}
            </Grid>
              ))
            // )
          ) : (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  {initialItems.map((item, index) => (
                    <Box key={index}>
                      <Link to="/singlepage">
                        <img src={item.img} alt="net" style={{ maxWidth: '90%', height: 'auto', borderRadius: "10px", overflow: {md:"hidden", xs:"hidden"}, textAlign: "justify" }} />
                      </Link>
                      <Typography sx={{ color: "blue", mb: "20px", fontWeight: "bold" }}>{item.game}</Typography>
                      <Typography sx={{ color: "black", mb: "20px", fontWeight: "bold", fontSize: "20px", cursor: "pointer" }}>{item.navi}</Typography>
                      <Typography sx={{ color: "black", mb: "20px", textAlign: "justify", mr: "30px" }}>{item.des}</Typography>
                      <Stack direction="row" spacing={2}>
                        <Box><Avatar alt="Travis Howard" src={man} /></Box>
                        <Stack>
                          <Box>
                            <Typography sx={{ color: "black", fontWeight: "bold" }}>Super A. Anam</Typography>
                            <Typography>June 11, 2022</Typography>
                          </Box>
                        </Stack>
                      </Stack>
                    </Box>
                  ))}
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Box>
    );
    

}