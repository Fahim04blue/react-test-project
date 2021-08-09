import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#663399",
    },
    secondary: {
      main: "#B1B1B1",
    },
    text: {
      main: "#43454D",
    },
    icon: {
      first: "#F2F1FE",
      second: "#C5DBFF",
      third: "#BCDDB3",
      fourth: "#FFF6E0",
    },

    error: {
      main: red.A400,
    },
    background: {
      default: "#F1F3F4",
    },
  },
  typography: {
    fontFamily: ["Nunito Sans"],
  },
});

export default theme;
