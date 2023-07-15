import "./App.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Detail from "./components/Detail";
import Dashboard from "./components/Dashboard";
import Create from "./components/Create";
import Update from "./components/Update";
import { Route, Routes } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import { useState } from "react";

export default function App() {
  const [createopen, setCreateOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false);

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ minHeight: "" }}>
            <Navigation />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ mt: "30px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/dashboard"
                element={
                  <Dashboard
                    createOpen={createopen}
                    setCreateOpen={setCreateOpen}
                    updateOpen={updateOpen}
                    setUpdateOpen={setUpdateOpen}
                  />
                }
              />
                 <Route path="/detail/:id" element={<Detail />} />
              <Route
                path="/create"
                element={<Create createopen={createopen} setCreateOpen={setCreateOpen} />}
              />
              <Route
                path="/update/:id"
                element={
                  <Update
                    updateOpen={updateOpen}
                    setUpdateOpen={setUpdateOpen}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
