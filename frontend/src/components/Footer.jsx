import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import {
    Box, 
    Container, 
    IconButton, 
    Typography,
    Link,
} from "@mui/material";


const Footer = () => {

    const socialLinks = [
        {icon: <GitHubIcon />, url: 'https://github.com/ManishKhatriChhetri'},
        {icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/manish-khatri-chhetri/'},
        {icon: <EmailIcon />, url: 'mailto:kc.manish2002@gmail.com'}
    ]
    
    return (
        <Box 
            component='footer'
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                background: 'rgba(0, 245, 255, 0.05)',
                
            }}
        >
            <Container maxWidth='lg'>

                <Box sx={{display: 'flex', justifyContent: 'center', gap: 4, mb: 3}}>
                    {
                        socialLinks.map((link, index) => (
                            <IconButton
                                key={index}
                                component={Link}
                                href={link.url}
                                target="_blank"
                                sx={{
                                    color: 'primary.main',
                                    border: '2px solid',
                                    borderColor: 'primary.main'
                                }}
                            >
                                {link.icon}
                            </IconButton>
                        ))
                    }
                    
                </Box>

                <Typography sx={{textAlign: 'center'}} variant="body2" color="text.secondary">
                    © {new Date().getFullYear()} Manish Khatri Chhetri. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;