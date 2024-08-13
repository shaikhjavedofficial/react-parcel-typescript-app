import React from 'react';
import { Button, IconButton } from '@mui/material';
import { useSnackbar } from 'notistack';

const SnackbarCloseButton = ({ snackbarKey }: { snackbarKey: string }) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton onClick={() => closeSnackbar(snackbarKey)} className='customButton'>
      <i color='white' className="ri-close-line" />
    </IconButton>
  );
};

export default SnackbarCloseButton;
