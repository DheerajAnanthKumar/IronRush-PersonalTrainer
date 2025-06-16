import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="5px" alignItems="center" px="40px" pt="24px">
        {/* <img src={Logo} width="200px" height="40px" /> */}
        <Typography variant="h6">IronRush</Typography>
        <Typography variant="h8" pd="20px" mt="20px">
          Made with ReactJS, Tailwind CSS and RAPID_API
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
