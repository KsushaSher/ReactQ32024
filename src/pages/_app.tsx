import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import wrapper from '../store/store';
import ThemeProvider from '../components/Context';
import '../styles/reset.css';
import '../styles/Styles.scss';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
