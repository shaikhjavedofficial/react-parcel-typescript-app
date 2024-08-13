import { Box, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    return (
      <Box style={{
        display: 'flex',
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
      }}>
        <Typography variant='h3'>Not Found</Typography>
    </Box>
    )
  }
}
