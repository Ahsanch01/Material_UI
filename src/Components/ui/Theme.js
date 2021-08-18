import { createTheme } from "@material-ui/core/styles";
const a = "#f50057";
const b = "#ffa000";
export default createTheme({
  palette: {
    common: {
      amber: `${a}`,
      sawara: `${b}`,
    },
    primary: {
      main: `${a}`,
    },
    secondary: {
      main: `${b}`,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
  },
});
