import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material'

const Form = () => {
    return ( 
        <>
        <FormControl>
    <FormLabel>Enter Name</FormLabel>
    <TextField></TextField>
    <Button>Submit</Button>
</FormControl>
<div>
    <h2>hi welcome </h2>
</div>
        </>
     );
}
 
export default Form;