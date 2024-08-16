import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './index.css';
import '@fontsource/roboto/400.css';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseButton from './Utils/enqueNotistack/SnackbarCloseButton';
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={3} action={(snackbarKey:any) => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
      <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    </SnackbarProvider>
  </React.StrictMode>
);
if (module.hot) {
  module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      root.render(
        <React.StrictMode>
          <SnackbarProvider maxSnack={3} action={(snackbarKey:any) => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
            <Provider store={store}>
              <BrowserRouter>
                <NextApp />
              </BrowserRouter>
            </Provider>
          </SnackbarProvider>
        </React.StrictMode>
      );
  });
}

