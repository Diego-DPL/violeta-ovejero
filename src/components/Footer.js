import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}
    >
      <Typography variant="body1">
        © 2024 Psicóloga. Todos los derechos reservados.
      </Typography>
      <IconButton
        component={Link}
        href="https://www.instagram.com/violetavop.psicologa"
        target="_blank"
        rel="noopener"
        color="inherit"
        sx={{ mr: 2 }} // Add margin to the right
      >
        <InstagramIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;