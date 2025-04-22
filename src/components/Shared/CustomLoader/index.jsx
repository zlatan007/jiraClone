import React from 'react';
import { Backdrop, CircularProgress, Typography, Box } from '@mui/material';

const CustomLoader = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
      open={open}
    >
      <CircularProgress color="inherit" size={60} thickness={5} />
      {/* <Typography variant="h6">{message}</Typography> */}
    </Backdrop>
  );
};

export default CustomLoader;