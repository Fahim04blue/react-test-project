import { Toolbar } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <div>
      <SideBar />
      <Box sx={{ marginLeft: 20, marginTop: 5 }}>
        <Toolbar />
        {children}
      </Box>
    </div>
  );
};

export default Layout;
