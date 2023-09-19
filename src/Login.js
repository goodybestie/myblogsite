import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { useProvider } from "./Context/Auth";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link"
import FormControl from '@mui/material/FormControl';

const Login = () => {
  const { Login, loading, error, setError } = useProvider();
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
      await Login(item);
      navigate("/home");
    } catch (error) {
      // Error message is now in the `error` state
    }
  };

  return (
    <Box sx={{ marginTop: { md: "8%", xs: "40%" } }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ px: "20px" }}>
        <Typography
          sx={{ textAlign: "center", mb: "30px", fontSize: "20px", color:"#071952" }}
        >
          Login
        </Typography>
        <Box sx={{display:"flex", flexDirection:"column", ml:{md:"37%", xs:"5%"}}}>

        <TextField
          fullWidth
          label=" Email"
          id="fullWidth"
          type="email"
          required
          variant="outlined"
          // size="small"
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: { md: "40%", xs: "%" }, mb:"20px" }}
        />
      <FormControl  variant="outlined" >
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          fullWidth
          required
          label=" Password"
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          // variant="outlined"
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
        {error && <Typography color="error" sx={{textAlign:"center", mt:"10px"}}>{error}</Typography>}

        <Button variant="contained" type="submit" sx={{ ml: {md:"47%", xs:"39%"}, mt: "40px"  }}>
          {loading ? "Logging In..." : "Login"}
        </Button>
        <Link href="/"><Typography sx={{textAlign:"center", mt:"12px"}}>Go back and SignUp</Typography></Link>
        
      </Box>
      
    </Box>
  );
};

export default Login;
