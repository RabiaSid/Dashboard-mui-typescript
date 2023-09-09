import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import DrawerCard from "../card/drawer-card";


type Page = {
    name: string;
    route: string;
    icon: React.ReactNode;
  };

type AppDrawerProps = {
    window?: () => Window,
    children: ReactNode 
}
  
  const drawerWidth = 240;

export default function AppDrawer(props: AppDrawerProps) {
    const {window, children} = props
    // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

  const drawer = (
    <div className="drawer_main pt-5 mt-5 " >
      {/* <Toolbar /> */}
      {/* <text className="Logo">
        Sedap<span className="LogoDoud">.</span>
      </text>
      <h4 className="LogoSubText ">Modern Admin Dashboard</h4> */}
      <List className="mb-5">
        {children}
      </List>
      <DrawerCard />
    </div>
  );

    const container =
    window !== undefined ? () => window().document.body : undefined;

  return <>
   <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },  }}
        aria-label="mailbox folders"
        className=""
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              zIndex:0
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              zIndex:0
            },
          }}
          open
        >
           
          {drawer}
        </Drawer>
      </Box>
  </>
}
