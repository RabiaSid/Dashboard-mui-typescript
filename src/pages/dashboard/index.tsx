import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardPage from "./dashboard-page";
import AnalyticsPage from "./analytics-page";
import OrderListPage from "./order-list-page";
import CustomerPage from "./customer-page";
import ReviewsPage from "./reviews-page";
import { TiHomeOutline } from "react-icons/ti";
import { BsListColumnsReverse, BsPeople} from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { BiPencil} from "react-icons/bi";
import DashboardHeader from "../../components/header";
import AppDrawer from "../../components/drawer";


type Page = {
  name: string;
  route: string;
  icon: React.ReactNode;
};

const drawerWidth = 240;

export default function Dashboard(props: { window?: () => Window }) {

  const pagesArr: Page[] = [
    {
      name: "Dashboard",
      route: "",
      icon: <TiHomeOutline />,
    },
    {
      name: "OrderList",
      route: "order-list-page",
      icon: <BsListColumnsReverse />,
    },
    {
      name: "Customer",
      route: "customer-page",
      icon: <BsPeople />,
    },
    {
      name: "Analytics",
      route: "analytics-page",
      icon: <SiSimpleanalytics />,
    },
    {
      name: "Reviews",
      route: "reviews-page",
      icon: <BiPencil />,
    },
  ];


  const navigate = useNavigate();

  const openPage = (route: string) => {
    navigate(`/dashboard/${route}`);
  };

  return (
    <div style={{ display: "flex", flexDirection:'row' }} className="m-0 p-0">
      {/* header */}
      <div className="col-12">
        <div className="row "><DashboardHeader /></div>
      
      
      {/* drawer */}
      <div className="row m-0 p-0">
     <AppDrawer>
     {pagesArr.map((x, index) => (
          <ListItem sx={{ height:'7vh', paddingX:3, paddingY:3}} key={index} disablePadding>
            <ListItemButton
              onClick={
                  () => openPage(x.route)
              }
              className="item_active"
            >
              <ListItemIcon sx={{ fontSize: "1.5rem" }} className="item_active_icon">
                {x.icon ? x.icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
     </AppDrawer>
      {/* routes */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height:'100vh'
        }}
      >
        <Toolbar />
        <Routes>
        <Route path="" element={<DashboardPage />} />
              <Route path="order-list-page" element={<OrderListPage />} />
              <Route path="customer-page" element={<CustomerPage />} />
              <Route path="analytics-page" element={<AnalyticsPage />} />
              <Route path="reviews-page" element={<ReviewsPage />} />
        </Routes>
      </Box>
      </div>
      </div>
    </div>
  );
}
