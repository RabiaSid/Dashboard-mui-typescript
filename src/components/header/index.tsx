import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { TbMessageDots } from "react-icons/tb";
import { BiGift } from "react-icons/bi";
import { RiSettings5Line } from "react-icons/ri";
import { purple } from "@mui/material/colors";
import { profile } from "../../assets";

const PurpleColor = purple[900];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  color: "lightgray",
  "&:hover": {
    backgroundColor: "white",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));



export default function DashboardHeader() {
  return (
    <>
      <AppBar
        // position="fixed"
        // position="sticky"
        
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          background: "#363830",
          boxShadow: 0,
          color: "#ffff",
        }}
      >
        <Toolbar>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          <div className="row justify-content-between align-items-center  w-100">
            <div className="col-7">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-3">
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge
                      sx={{
                        borderRadius: 2,
                        padding: 1,
                        background: `var(--transparency-quantinery, rgba(45, 156, 219, 0.15))`,
                      }}
                      badgeContent={17}
                      color="primary"
                    >
                      <NotificationsIcon color="primary" />
                    </Badge>
                  </IconButton>
                </div>
                <div className="col-3">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge
                      sx={{
                        borderRadius: 2,
                        padding: 1,
                        background: `var(--transparency-quantinery, rgba(45, 156, 219, 0.15))`,
                      }}
                      badgeContent={4}
                      color="primary"
                    >
                      <TbMessageDots color="blue" />
                    </Badge>
                  </IconButton>
                </div>
                <div className="col-3">
                  <IconButton
                    size="large"
                    aria-label="show 4 new mails"
                    color="inherit"
                  >
                    <Badge
                      sx={{
                        borderRadius: 2,
                        padding: 1,
                        background: `rgba(94, 108, 147, 0.15);`,
                      }}
                      badgeContent={4}
                      color="primary"
                    >
                      <BiGift color={"blue"} />
                    </Badge>
                  </IconButton>
                </div>
                <div className="col-3">
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge
                      sx={{
                        borderRadius: 2,
                        padding: 1,
                        background: `var(--transparency-danger, rgba(255, 91, 91, 0.15))`,
                      }}
                      badgeContent={17}
                      color="error"
                    >
                      <RiSettings5Line color="error" />
                    </Badge>
                  </IconButton>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="row align-items-center">
                <div className="col-8">
                  <text>
                    <span className="accountText">Hello,</span>
                    <span className="accountName">Samantha</span>
                  </text>
                </div>
                <div className="col-4">
                  <img
                    src={profile}
                    style={{ width: "56px", height: "56px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

