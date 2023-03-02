import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Inventory from "./views/Inventory/Inventory";
import LineItems from "./views/LineItems/LineItems";
import WebBlog from "./views/WebBlog/WebBlog";

const darkTheme = createTheme({});

interface AppStateProps {}

const App: React.FC<AppStateProps> = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/lineitems" element={<LineItems />} />
        <Route path="/webblog" element={<WebBlog />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
