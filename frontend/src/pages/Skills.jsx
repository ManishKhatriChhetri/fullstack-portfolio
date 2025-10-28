import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        "Java 8/11/17",
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "SQL",
      ],
    },
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Material-UI"],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express",
        "Spring Boot",
        "REST APIs",
        "Hibernate",
        "JPA",
      ],
    },
    { title: "IDEs", skills: ["VS Code", "IntelliJ", "Eclipse"] },
    {
      title: "Database",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"],
    },
    {
      title: "Cloud Platforms",
      skills: [
        "AWS (EC2, S3, Lambda, IAM, CloudFormation)",
        "AWS DB (Aurora Postgress, DynamoDB)",
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        "Jenkins",
        "Maven",
        "Gradle",
        "Git",
        "GitHub Acions",
        "Bitbucket",
        "Ansible",
      ],
    },
    { title: "Messaging Systems", skills: ["Apache Kafka"] },
    {
      title: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes"],
    },
    { title: "Testing & QA", skills: ["JUnit", "Mockito", "Swagger"] },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
          Skills & Technologies
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 4, maxWidth: 600, mx: "auto", textAlign: "center" }}
        >
          Technologies and tools I work with to build amazing applications.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skillCategories.map((category, index) => (
            <Grid item key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    width: 400,
                    height: 180
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        justifyContent: "center",
                      }}
                    >
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill}
                          label={skill}
                          sx={{
                            background: "rgba(0, 245, 255, 0.1)",
                            border: "1px solid rgba(0, 245, 255, 0.3)",
                          }}
                        ></Chip>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills;
