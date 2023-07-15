import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Detail from "../components/Detail";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  AppBar,
  Toolbar,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import Navigation from "./Navigation";
import InfoIcon from "@mui/icons-material/Info";

export default function Home() {
  const [staffs, setStaffs] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  useEffect(() => {
    fetch("https://649900e879fbe9bcf83e9119.mockapi.io/API/data")
      .then((res) => res.json())
      .then((data) => setStaffs(data))
      .catch((error) => console.log(error));
  }, []);

  const handleCardClick = (staff) => {
    if (selectedStaff === staff) {
      setSelectedStaff(null);
    } else {
      setSelectedStaff(staff);
    }
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          {/* <Navigation /> */}
        </Grid>
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ background: "#f5f5f5" }} // Set the desired background color
          >
            <ImageList
              variant="quilted"
              cols={5}
              gap={5}
              sx={{ width: "200%", height: "200%" }}
            >
              {staffs.map((staff) => (
                <ImageListItem
                  key={staff.id}
                  sx={{
                    height: "auto",
                    width: "100%", // Set the width to 100% to fill the available space
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img src={staff.avatar} alt={staff.name} />

                  {/* {selectedStaff === staff && (
                    <Card
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#ffffff",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "scale(1.1)",
                          transition: "transform 0.2s ease-in-out",
                        },
                      }}
                      onClick={() => handleCardClick(staff)}
                    >
                      <CardContent>
                        <Typography variant="h6" component="div">
                          {staff.name}
                        </Typography>
                        <Divider sx={{ mt: 1, mb: 2 }} />
                        <Typography variant="body1">
                          Age: {staff.age}
                        </Typography>
                        <Typography variant="body2">
                          
                        </Typography>
                      </CardContent>
                    </Card>
                  )} */}

                  <ImageListItemBar
                    title={staff.name}
                    subtitle={`Age: ${staff.age}`}
                    actionIcon={
                      <IconButton
                        component={Link}
                        to={`/detail/${staff.id}`}
                        sx={{
                          color: "#f5f5f5",
                          "&:hover": {
                            transform: "scale(1.1)",
                            transition: "transform 0.2s ease-in-out",
                          },
                        }}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
