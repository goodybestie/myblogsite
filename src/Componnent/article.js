import stock from "../Images/stock.jpeg"
import { Box, Typography } from "@mui/material";


const Article = () => {
    const data=[{img:stock, des:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam? "}]
    return ( 
        <Box sx={{mt:"-50px"}}>
            
            {
                data.map((data => (
                    <Typography key={data} sx={{textAlign:"center"}}>
                        <img src={data.img} style={{  borderRadius:"30px", height:"22rem", width:"60%" }} 
                        
                        />
                        <Typography sx={{width:{md:"50%", xs:"80%"},  textAlign:"left",  marginLeft:{md:"25%", xs:"15%"} }}>{data.des} </Typography>
                    </Typography>
                )))
            }
        </Box>
     );
}
 
export default Article;