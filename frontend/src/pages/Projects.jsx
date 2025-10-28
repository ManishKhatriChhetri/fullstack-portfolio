import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { projectsAPI } from "../services/api";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectsAPI.getAll();
      console.log(response);
      setProjects(response.data.data);
    } catch (error) {
      console.log("Error fetching projects: ", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
          My Projects
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 6, textAlign: "center", maxWidth: 600, mx: "auto" }}
        >
          Showcasing my work in full-stack development.
        </Typography>

        {projects.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="text.secondary" mb={4}>
              No projects yet. Add some from backend.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={2} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item key={project._id}>
                <Card
                  sx={{
                    height: "100%",
                    width: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    pb: 2,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {project.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: 1,
                        mb: 2,
                      }}
                    >
                      {project.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: "rgba(0, 245, 255, 0.1)",
                            border: "1px solid rgba(0, 245, 255, 0.3)",
                          }}
                        ></Chip>
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      href={project.liveURL}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<LaunchIcon />}
                      href={project.gitHubUrl}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </motion.div>
    </Container>
  );
};

export default Projects;
