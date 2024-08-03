import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/Styles.scss';
import App from './App.tsx';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import ThemeProvider from './components/Context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
