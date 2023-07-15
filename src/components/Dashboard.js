import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Box,
  Snackbar,
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Navigation from "./Navigation";

export default function Dashboard(props) {
  const [data, setData] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://649900e879fbe9bcf83e9119.mockapi.io/API/data")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    fetch(`https://649900e879fbe9bcf83e9119.mockapi.io/API/data/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id));
        }
      })
      .catch((error) => console.log(error));
    setDeleteId(null);
  };

  return (
    <>
      <Grid container>
        <Grid items xs={12}>
          {/* <Navigation/> */}
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <Link to="/create">
                <Button sx={{ backgroundColor: "#DAA520", color: "#fff" }}>
                  CREATE
                </Button>
              </Link>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell>{row.avatar}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>
                    {/* Pass id as URL parameter */}
                    <Link to={`/update/${row.id}`}>
                      <Button
                        sx={{ backgroundColor: "#DAA520", color: "#fff" }}
                      >
                        Update
                      </Button>
                    </Link>
                    <Button
                      onClick={() => setDeleteId(row.id)}
                      sx={{ backgroundColor: "#DAA520", color: "#fff" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {/* ... */}
            </TableBody>
          </Table>

          {/* Confirmation dialog */}
          <Dialog open={deleteId !== null} onClose={() => setDeleteId(null)}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete this item?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={() => setDeleteId(null)}
                sx={{ color: "#DAA520" }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(deleteId)}
                autoFocus
                sx={{ color: "#DAA520" }}
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>

          {/* ... */}
        </TableContainer>

        {/* ... */}
      </Grid>

      {/* ... */}
    </>
  );
}
