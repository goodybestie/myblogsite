import { Box, Typography } from '@mui/material/';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import Navbar from "../Componnent/Navbar"
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from "axios"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const BlogPage = ({ records }) => {
  const { id } = useParams()

  const list = [{ title: "Blog Title", des: "Blog Description", language: "Blog Language" }]
  const [error, setError] = useState("Ooops! Network Error..")
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [networkErrorMessage, setNetworkErrorMessage] = useState(null);
  const [isNetworkError, setIsNetworkError] = useState(false);
  // Added state for network error messageconst [isNetworkError, setIsNetworkError] = useState(false); // Added state to track network error


  const initialvalues = {
    title: "",
    description: "",
    language: "",
  }

  const [values, setValues] = useState(initialvalues)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
    console.log(values)
  }

  const navigate = useNavigate()

  const handleButtonAction = async (e) => {
    e.preventDefault();

    if (isUpdateMode) {
      // Update the record
      handleUpdate();
    } else {
      // Add a new record
      setIsLoading(true); // Set loading to true
      setIsNetworkError(false); // Reset network error state

      axios.post("/record/", values)
        .then((res) => {
          console.log(res);
          setIsLoading(false); // Set loading to false
          navigate("/allrecords");
        })
        .catch((error) => {
          console.log('Network error:', error);
          setNetworkErrorMessage('Ooops! No Network');
          setIsLoading(false); // Set loading to false in case of an error
          setIsNetworkError(true); // Set network error state to true
        });
    }
  }

  const handleUpdate = () => {
    setIsLoading(true); // Set loading to true
    const recordToUpdate = records?.results?.find(item => item.id === id);

    const updatedData = {
      title: values.title || recordToUpdate.title,
      description: values.description || recordToUpdate.description,
      language: values.language || recordToUpdate.language,
    };

    axios.put(`/record/${id}`, updatedData)
      .then((res) => {
        console.log(res);
        setIsLoading(false); // Set loading to false
        navigate("/allrecords");
      })
      .catch((error) => {
        console.log('Network error:', error);
        setNetworkErrorMessage('Ooops! No Network');
        setIsLoading(false); // Set loading to false in case of an error
      });
  };

  useEffect(() => {
    axios.get(`/record/${id}`)
      .then(response => {
        const itemData = response.data;
        setValues(itemData);
        setIsUpdateMode(true); // Enable update mode since we're editing an existing record
      })
      .catch(error => {
        console.error('Error fetching item data:', error);
        setNetworkErrorMessage('Ooops! No Network');
      });
  }, [id]);

  return (
    <Box>
      <Navbar />
      <Box sx={{ mt: "30px" }}>
        <Typography sx={{ textAlign: "center" }}>Create New Blog</Typography>
      </Box>

      {isNetworkError && (
      <Typography sx={{ textAlign: "center", color: "red" }}>
        {networkErrorMessage}
      </Typography>
    )}
      <Box sx={{ mr: { md: "30%", sx: "-50rem" }, ml: { md: "30%", sx: "50%" } }}>
        <Box
          component="form"
          onSubmit={handleButtonAction}
          sx={{
            width: { xs: "300px", md: "500px" },
            mx: "auto"
          }}
        >
          {list.map((List => (
            <Box key={List}>
              <InputLabel>{List.title}</InputLabel>
              <TextField onChange={handleChange} fullWidth value={values.title} id="title" name='title' required sx={{ mb: "14px", width: { sx: "50%", md: "100%" } }} />
              <InputLabel>{List.des}</InputLabel>
              <TextField value={values.description} name="description" fullWidth id="description" required onChange={handleChange} sx={{ mb: "14px", width: { sx: "50%", md: "100%" } }} type='text' />
              <InputLabel id="demo-simple-select-helper-label">{List.language}</InputLabel>
              <FormControl fullWidth id="fullWidth" required sx={{ mb: "14px", width: { sx: "50%", md: "100%" } }}>
                <TextField
                  select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={values.language}
                  name="language"
                  onChange={handleChange}
                >
                  <MenuItem value={"English"}>English</MenuItem>
                  <MenuItem value={"Ghana"}>Ghana</MenuItem>
                  <MenuItem value={"China"}>China</MenuItem>
                </TextField>
              </FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="contained" type='Submit'>
                  {isLoading ? 'Processing...' : (isUpdateMode ? 'Update Blog' : 'Add Blog')}
                </Button>
              </Box>
            </Box>
          )))}
        </Box>
      </Box>
    </Box>
  );
}

export default BlogPage;
