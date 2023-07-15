import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const [data, setData] = useState({
    createdAt: "",
    name: "",
    age: "",
    avatar: "",
    address: "",
    id: "",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://649900e879fbe9bcf83e9119.mockapi.io/API/data/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Box sx={{ m: 4 }}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Avatar
                    alt={data.name}
                    src={data.avatar}
                    sx={{ width: 200, height: 200 }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  {data.name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Age: {data.age}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Address: {data.address}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Created At: {new Date(data.createdAt).toLocaleString()}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Box sx={{ mt: 2 }}>
          <Button
            component={Link}
            to={`/update/${id}`}
            variant="contained"
            sx={{ backgroundColor: "#DAA520", color: "#fff" }}
          >
            Update
          </Button>
        </Box>
      </Box>
    </>
  );
}
