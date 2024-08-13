import React, { Component } from 'react';
import { enqueNotistack } from '../Utils/enqueNotistack/enqueNotistack';
import { Typography, Box } from '@mui/material';

class Home extends Component {
componentDidMount(): void {
  enqueNotistack()
}
  render() {
  return (
    <Box justifyContent='center' alignItems='center' height='100vh' display='flex'>
      <Typography variant='h3'>
        Parcel React App
      </Typography>
    </Box>
  );
}
}
export default Home;
