import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4b6fec',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f0f0f0',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, Roboto, Arial, sans-serif'
  },
});

export default theme;
