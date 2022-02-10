import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import {SSRProvider} from '@react-aria/ssr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <SSRProvider>
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
  </SSRProvider>
  )
}

export default MyApp
