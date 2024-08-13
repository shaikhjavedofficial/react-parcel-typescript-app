import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();