import React, { Component } from 'react';
import { enqueNotistack } from '../Utils/enqueNotistack/enqueNotistack';
import { Typography, Box } from '@mui/material';

class Home extends Component {
componentDidMount(): void {
  enqueNotistack()
}
  render() {
  return (
    <Box justifyContent='center' position='relative' top='55vh' display='flex'>
      <Typography variant='h3' color='white'>
        Welcome to Crisp
      </Typography>
    </Box>
  );
}
}
export default Home;
