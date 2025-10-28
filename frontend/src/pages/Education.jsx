import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Education = () => {
  const educationalInstitutions = [
    {
      logo: "/logos/UTSA.png",
      school: "University of Texas at San Antonio",
      degree: "Master of Science in Computer Science",
      period: "Aug 2021 - May 2024",
      gpa: "3.91/4.0",
    },
    {
      logo: "/logos/Tribhuvan_University.png",
      school: "Tribhuvan University, IOE Pulchowk Campus",
      degree: "Bachelor's degree in Engineering",
      period: "Nov 2012 - Jan 2017",
      gpa: "3.75/4.0",
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
        Education
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 6, textAlign: "center", maxWidth: 600, mx: "auto" }}
      >
        My academic background and qualifications
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {educationalInstitutions.map((institution, index) => (
          <Grid item key={index}>
            <Card>
              <CardContent sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, p: 4}}>
                <Box
                  component="img"
                  src={institution.logo}
                  alt={`${institution.school} Logo`}
                  sx={{
                    width: 100,
                    height: 100,
                  }}
                ></Box>
                <Box sx={{textAlign: 'center'}}>
                  <Typography variant="h5" sx={{ mb: 1 }}>{institution.school}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mb: 1 }}>{institution.degree}</Typography>
                  <Typography variant="body1" color="text.secondary">{institution.period}</Typography>
                  <Typography variant="body1" color="text.secondary">{institution.gpa}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Education;
