import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';
import { enqueNotistack } from '../Utils/enqueNotistack/enqueNotistack';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
jest.mock('../Utils/enqueNotistack/enqueNotistack', () => ({
  enqueNotistack: jest.fn(),
}));

test('renders Home component and calls enqueNotistack on mount', () => {
  act(()=>{
  render( <Provider store={store}><Home /></Provider>);
})
const text = screen.getByText(/Parcel React App/i);
  expect(text).toBeInTheDocument();
  // Check if enqueNotistack is called
  expect(enqueNotistack).toHaveBeenCalled();
});
