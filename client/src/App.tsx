import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LineItems from "./views/LineItems/LineItems";
import WebblogList from "./views/WebblogList/WebblogList";
import AddInventory from "./views/AddInventory/AddInventory";
import InventoryList from "./views/InventoryList/InventoryList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EditInventory from "./views/EditInventory/EditInventory";
import AddWebblog from "./views/AddWebblog/AddWebblog";
import EditWebblog from "./views/EditWebblog/EditWebblog";

const darkTheme = createTheme({});

interface AppStateProps {}

const App: React.FC<AppStateProps> = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/inventory/add" element={<AddInventory />} />
          <Route path="/inventory/edit/:id" element={<EditInventory />} />
          <Route path="/lineitems" element={<LineItems />} />
          <Route path="/webblog" element={<WebblogList />} />
          <Route path="/webblog/add" element={<AddWebblog />} />
          <Route path="/webblog/edit/:id" element={<EditWebblog />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
