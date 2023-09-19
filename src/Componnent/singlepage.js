import { Stack } from '@mui/material';
import Navbar from "../Componnent/Navbar"
import Second from './second'; 
import Article from './article';
import Related from "./Related"

const SinglePage = () => {
    return ( 
        <Stack>
            <Navbar />
            <Second/>
            <Article />
            <Related />
        </Stack>

     );
}
 
export default SinglePage;