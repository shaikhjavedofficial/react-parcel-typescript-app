import { render } from '@testing-library/react';
import { enqueueSnackbar } from 'notistack';
import { enqueNotistack } from './enqueNotistack';

jest.mock('notistack', () => ({
  enqueueSnackbar: jest.fn(),
}));

describe('enqueNotistack', () => {
  it('should call enqueueSnackbar with correct arguments', () => {
    const props = { variant: 'success' };
    const expectedOptions = {
      autoHideDuration: 3000,
      anchorOrigin: { horizontal: 'center', vertical: 'top' },
      variant: 'success',
    };

    render(enqueNotistack(props));

    expect(enqueueSnackbar).toHaveBeenCalledWith('App started', expectedOptions);
  });
});
