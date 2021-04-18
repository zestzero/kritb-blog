import React, { FunctionComponent } from 'react';
import '../styles/globals.css';

import type { AppProps /* , AppContext */ } from 'next/app';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

export default MyApp;
