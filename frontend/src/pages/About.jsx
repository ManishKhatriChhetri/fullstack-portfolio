import React from "react";
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import {motion} from 'framer-motion';

const About = () => {

    const stats = [
        {icon: <WorkIcon />, label: 'Years Experience', value: '4+'},
        {icon: <CodeIcon />, label: 'Projects Completed', value: '8+'}, 
        {icon: <SchoolIcon />, label: 'Certifications', value: '5+'},
    ]

    return (
        <Container sx={{ py: 4 }}>
            <motion.div
                initial={{ opacity: 0, y: 30}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" sx={{textAlign: 'center', mb: 5}}>
                    About Me
                </Typography>

                <Grid container justifyContent='center'>
                    <Grid item>
                            <Avatar
                                sx={{
                                    height: 150,
                                    width: 150,
                                    mb: 5,
                                    border: '5px solid',
                                    borderColor: 'primary.main'
                                }}
                            >
                                <Typography variant="h1">👨‍💻</Typography>
                            </Avatar>
                        
                    </Grid>

                    <Grid item textAlign='center'>
                        <Typography variant="h4" sx={{ mb: 3 }}>
                            Hello! I'm a Full Stack Software Engineer
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            I'm a passionate full-stack software engineer with expertise in building scalable web applications and microservices. I specialize in React, Node.js and Spring Boot.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            I love solving complex problems and turning ideas into reality through clean, efficient code.
                        </Typography>
                    </Grid>

                </Grid>

                <Grid container spacing={4} sx={{ mt: 6 }} justifyContent="center">
                    {stats.map((stat, index) => (
                    <Grid item key={index}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card sx={{textAlign: 'center', py: 2}}>
                                <CardContent >
                                    <Box
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: '50%',
                                            border: '2px solid',
                                            borderColor: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(0, 245, 255, 0.1)',
                                            mb: 2,
                                            mx: 'auto',
                                            color: 'primary.main',
                                            '& > svg': {           // Target the SVG icon
                                                fontSize: 40,      
                                            }
                                        }}
                                        
                                    >
                                        {stat.icon}
                                    </Box>
                                    <Typography variant='h3' color="primary">
                                        {stat.value}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        {stat.label}
                                    </Typography>
                                </CardContent>
                        </Card>
                        </motion.div>
                            
                    </Grid>))}
                </Grid>
            </motion.div>
        </Container>
    );
}

export default About;