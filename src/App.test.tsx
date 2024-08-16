import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { store } from './redux/store';

test('renders NotFound component for an unknown path', () => {
  render(
    <SnackbarProvider>
    <Provider store={store}>
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>
    </Provider>
    </SnackbarProvider>
  );
  expect(screen.getByText(/not found/i)).toBeInTheDocument();
});
