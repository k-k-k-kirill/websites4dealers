import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

interface DashboardProps {
  children: ReactNode;
}

const views = [
  { id: "inventory", title: "Inventory" },
  { id: "webblog", title: "Web blog" },
  { id: "lineitems", title: "Line items" },
];

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: "150px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "150px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {views.map((item) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "block",
            }}
            to={`/${item.id}`}
          >
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
