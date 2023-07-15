import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";

export default function Update(props) {
  const [newData, setNewData] = useState({
    name: "",
    age: "",
    avatar: "",
    address: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://649900e879fbe9bcf83e9119.mockapi.io/API/data/${id}`)
      .then((res) => res.json())
      .then((data) => setNewData(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleUpdate = () => {
    fetch(`https://649900e879fbe9bcf83e9119.mockapi.io/API/data/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the state with the new data
        setNewData(data);
        props.setOpen(true);
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <>
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" gutterBottom>
          Update Data
        </Typography>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  value={newData.name}
                  onChange={(e) =>
                    setNewData((prevData) => ({
                      ...prevData,
                      name: e.target.value,
                    }))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Age"
                  type="number"
                  value={newData.age}
                  onChange={(e) =>
                    setNewData((prevData) => ({
                      ...prevData,
                      age: e.target.value,
                    }))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Avatar"
                  value={newData.avatar}
                  onChange={(e) =>
                    setNewData((prevData) => ({
                      ...prevData,
                      avatar: e.target.value,
                    }))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  value={newData.address}
                  onChange={(e) =>
                    setNewData((prevData) => ({
                      ...prevData,
                      address: e.target.value,
                    }))
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box sx={{ mt: 2 }}>
          <Link to="/dashboard">
            <Button
              variant="contained"
              onClick={handleUpdate}
              sx={{ backgroundColor: "#DAA520", color: "#fff" }}
            >
              Update
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button sx={{ ml: 1, backgroundColor: "#DAA520", color: "#fff" }}>
              Cancel
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
