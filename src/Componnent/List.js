import { Box, Stack, Typography } from "@mui/material";
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';

const list = [{All:"All",Home:'Home', About:'About Us', Blog:'Blog', serv:"Services", page:"page", land:"land"}];

const List = () => {
    return ( 
        <Stack>
            <Box>
                {
                    list.map((list => (
                        <Typography key={list} sx={{display:{md:"flex", xs:"none"}, justifyContent:"center", gap:"24px", mt:"34px"}}>
                            <Button variant="contained" size="small" sx={{backgroundColor:"blue", fontSize:"10px",borderRadius:"10px", padding:"0px 10px"}}>{list.All}
                                </Button>
                            <Typography>{list.Home}</Typography>
                            <Typography>{list.About}</Typography>
                            <Typography>{list.Blog}</Typography>
                            <Typography>{list.serv}</Typography>
                            <Typography>{list.page}</Typography>
                            <Typography>{list.land}</Typography>
                        </Typography>
                    )))
                }
            </Box>
        </Stack>
     );
}
 
export default List;