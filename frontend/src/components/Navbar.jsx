import {AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import React from "react";

const navItems = [
    {label: 'Home', path: '/'},
    {label: 'About', path: '/about'},
    {label: 'Education', path: '/education'},
    {label: 'Skills', path: '/skills'},
    {label: 'Projects', path: '/projects'},
    {label: 'Contact', path: '/contact'},
];



const Navbar = () => {
    return (
        <>
            <AppBar
                position="sticky"
            >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography 
                            variant="h6"
                            sx={{
                                flexGrow: 3,
                                color: 'inherit',
                                fontWeight: 800,background: 'linear-gradient(45deg, #00f5ff, #ff00ff)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >

                            Manish Khatri Chhetri
                        </Typography>

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
                        
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );       
}

export default Navbar