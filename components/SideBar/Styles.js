import {
  AppBar,
  Avatar,
  Badge,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import { styled } from "@material-ui/core/styles";

export const drawerWidth = 120;

export const StyledAppBar = styled(AppBar)(() => ({
  width: `calc(100% - ${drawerWidth}px)`,
  ml: `${drawerWidth}px`,
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "#FFFFFF",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "503px",
    height: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "20ch",
    },
  },
}));

export const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    left: 2,
    top: -4,
  },
}));
export const StyledAvatar = styled(Avatar)(() => ({
  width: 60,
  height: 58,
  borderRadius: 10,
  left: 8,
}));

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    backgroundColor: theme.palette.primary.main,
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: 700,
  fontSize: 30,
  color: "#FFFFFF",
  textAlign: "center",
  marginTop: 18,
}));

export const StyledListItem = styled(ListItem)(() => ({
  display: "flex",
  flexDirection: "column",
  alignContent: "center",
  marginTop: 20,
}));

export const StyledListItemIcon = styled(ListItemIcon)(() => ({
  marginLeft: 15,
}));

export const StyledListItemText = styled(ListItemText)(() => ({
  marginRight: 15,
  color: "#FFFFFF",
}));
