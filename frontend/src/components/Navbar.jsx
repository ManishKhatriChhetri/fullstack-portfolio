import React, { useState } from "react";
import {
    AppBar, 
    Box, 
    Button, 
    Container, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemText, 
    Toolbar, 
    Typography, 
    useMediaQuery,
    useTheme,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Link as RouterLink} from "react-router-dom";

const navItems = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Education', path: '/education'},
    {label: 'Skills', path: '/skills'},
    {label: 'Projects', path: '/projects'},
    {label: 'Contact', path: '/contact'},
];

const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <Box sx={{width: 250, pt: 1}}>
            <Box sx={{display: 'flex', justifyContent: 'flex-end', px: 2}}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box> 

            <List>
                {navItems.map(item => (
                    <ListItem key={item.label}>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            onClick={handleDrawerToggle}
                        >
                            <ListItemText primary={item.label}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
            >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography 
                            variant="h6"
                            component={RouterLink}
                            to='/'
                            sx={{
                                flexGrow: 3,
                                color: 'inherit',
                                fontWeight: 800,
                                background: 'linear-gradient(45deg, #00f5ff, #ff00ff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Manish Khatri Chhetri
                        </Typography>

                        {isMobile? (
                            <IconButton onClick={handleDrawerToggle}>
                                <MenuIcon></MenuIcon>
                            </IconButton>
                        ):
                            <Box sx={{display: 'flex', gap: 1}}>
                                {navItems.map(item => (
                                    <Button 
                                        key={item.label}
                                        component={RouterLink}
                                        to={item.path}
                                        sx={{color: 'white'}}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </Box>

                        }
        
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor='right'
                open={mobileOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </>
    );       
}

export default Navbar