import { Typography, Box, Stack, Button, Link, Card } from "@mui/material";
import axios from "axios";
import Navbar from "../Componnent/Navbar";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import * as React from "react";

const NewBlog = () => {
  const [open, setOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [records, setRecords] = useState([]);

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const handleDelete = () => {
    if (deleteId) {
      axios
        .delete(`/record/${deleteId}`)
        .then((res) => {
          console.log(res.data);
          console.log("Resource deleted successfully");
          setRecords((prevState) => ({
            results: prevState.results?.filter((item) => item.id !== deleteId),
          }));
          handleClose();
        })
        .catch((error) => {
          console.error("Failed to delete resource", error);
        });
    }
  };

  useEffect(() => {
    axios
      .get("/record")
      .then((res) => {
        setRecords(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <Stack>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "30px",
            background: "#071952",
            padding: "20px",
          }}
        >
          <Typography sx={{ fontSize: "30px", color: "#fff" }}>
            Blog List
          </Typography>
          <Link href="/createnewblog/:id">
            <Button variant="contained" sx={{ mt: "10px" }}>
              Create New Blog
            </Button>
          </Link>
        </Box>
        {records && records?.results?.length > 0 ? (
          <Card item xs={2} sm={4} md={4}>
            {records?.results?.map((items) => (
              <Box key={items.id}>
                <Typography>{items.title}</Typography>
                <Typography>{items.description}</Typography>
                <Typography>{items.language}</Typography>
                <Link href={`/createnewblog/${items.id}`}>
                  <Button>EDIT</Button>
                </Link>

                <Button onClick={() => handleClickOpen(items.id)}>DELETE</Button>
              </Box>
            ))}
          </Card>
        ) : (
          <Typography
            sx={{ mt: { xs: "70%", md: "10%" }, textAlign: "center" }}
          >
            No Blog Available..create new Blog
          </Typography>
        )}
      </Stack>

      <Dialog
        fullWidth
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Confirm Deletion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this blog?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewBlog;
