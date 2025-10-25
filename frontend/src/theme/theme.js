import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#00f5ff',
            light: '#64ffff',
            dark: '#00c1cc'
        },
        secondary: {
            main: '#ff00ff',
            light: '#ff64ff',
            dark: '#cc00cc',
        },
    }
});

export default theme;
