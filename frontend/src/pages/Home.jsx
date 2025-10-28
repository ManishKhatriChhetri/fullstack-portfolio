import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center" }}>
            <CodeIcon sx={{ fontSize: 80, color: "primary.main", mb: 2 }} />

            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              WELCOME TO MY PORTFOLIO
            </Typography>

            <Typography variant="h1" sx={{ mb: 3 }}>
              Hi, I'm Manish Khatri Chhetri
            </Typography>

            <Typography variant="h4" color="text.secondary" sx={{ mb: 4 }}>
              Full Stack Software Engineer
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 600, mx: "auto" }}
            >
              I craft elegant solutions to complex problems using modern web
              technologies.
            </Typography>

            <Stack direction="row" spacing={3} justifyContent="center">
              <Button
                variant="contained"
                component={RouterLink}
                to="/projects"
                size="large"
                sx={{width: 200}}
                endIcon={<ArrowForwardIcon />}
              >
                View My Work
              </Button>
              <Button
                variant="contained"
                component={RouterLink}
                to="/contact"
                size="large"
                sx={{width: 200}}
              >
                Get In Touch
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Home;
