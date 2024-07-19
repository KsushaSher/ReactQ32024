import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/Styles.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
