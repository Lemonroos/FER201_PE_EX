import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Create(props) {
  const [newData, setNewData] = useState({
    name: "",
    age: "",
    avatar: "",
    address: "",
  });

  const handleCreate = () => {
    // Set createdAt field to current date
    const newDataWithCreatedAt = {
      ...newData,
      createdAt: new Date().toISOString(),
    };

    fetch("https://649900e879fbe9bcf83e9119.mockapi.io/API/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDataWithCreatedAt),
    })
      .then((res) => res.json())
      .then((data) => {
        setNewData({
          name: "",
          age: "",
          avatar: "",
          address: "",
        });
        props.setOpen(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Box sx={{ m: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create New Data
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
              onClick={handleCreate}
              sx={{ backgroundColor: "#DAA520", color: "#fff" }}
            >
              Create
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
