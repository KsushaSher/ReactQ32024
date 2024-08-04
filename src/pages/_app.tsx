import type { AppProps } from 'next/app';
import '../styles/reset.css';
import '../styles/Styles.scss';
import { Provider } from 'react-redux';
import store from '../store/store';
import ThemeProvider from '../components/Context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
