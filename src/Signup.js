import React, { useState } from "react";
import { Box, Typography} from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useProvider } from "./Context/Auth";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Link} from "react-router-dom"

const Signup = () => {
  const { Signup, loading, error, setError } = useProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous error message
    setError(null);

    const item = {
      email: email,
      password: password,
    };

    try {
      await Signup(item);
      navigate("/Login");
    } catch (error) {
      // Error message is now in the `error` state
    }
  };

  return (
    <Box sx={{ marginTop: { md: "8%", xs: "40%" }}}>
      <Box component="form" onSubmit={handleSubmit} sx={{ px: "20px" }}>
        <Typography
          sx={{ textAlign: "center", color: "#071952", mb: "30px", fontSize: "20px" }}
        >
          SignUp
        </Typography>
        <Box sx={{display:"flex", flexDirection:"column", ml:{md:"37%", xs:"5%"}}}>
        <TextField
          fullWidth
          label=" Email"
          id="fullWidth"
          type="email"
          variant="outlined"
          // size="small"
          required
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: { md: "40%", xs: "%" }, mb:"20px" }}
        />
        {error && <Typography color="error" sx={{ mt:"-12px", mb:"10px"}}>{error}</Typography>}
        <FormControl  variant="outlined">
    <InputLabel >Password</InputLabel>
        <OutlinedInput
          fullWidth
          required
          label=" Password"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          // size="small"
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={{ width: { md: "40%", xs: "%" } }}
        />
        </FormControl>
        </Box>


        <Button variant="contained" type="submit" sx={{ ml: {md:"47%", xs:"39%"}, mt: "40px" }}>
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
       <Link to="/Login">
         <Typography sx={{textAlign:"center", mt:"12px"}} >
          Already have an Account Login</Typography>
          </Link>
        
      </Box>
    </Box>
  );
};

export default Signup;
