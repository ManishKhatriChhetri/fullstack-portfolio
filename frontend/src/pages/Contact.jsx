import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    { icon: <PhoneIcon />, value: "737 808 3485" },
    {
      icon: <EmailIcon />,
      value: "kc.manish2002@gmail.com",
      link: "mailto:kc.manish2002@gmail.com",
    },
    {
      icon: <LinkedInIcon />,
      value: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/manish-khatri-chhetri/",
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" sx={{ textAlign: "center", mb: 2 }}>
          Contact Me
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {contacts.map((contact, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 300,
                }}
              >
                <CardContent>
                  <Link
                    href={contact.link}
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 100,
                        width: 100,
                        borderRadius: "50%",
                        borderColor: "primary.main",
                        color: "primary.main",
                        background: "rgba(0, 245, 255, 0.1)",
                        border: "1px solid rgba(0, 245, 255, 0.3)",
                        mx: "auto",
                        mb: 2,
                        "& > svg": {
                          fontSize: 40,
                        },
                      }}
                    >
                      {contact.icon}
                    </Box>
                    <Typography>{contact.value}</Typography>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;
