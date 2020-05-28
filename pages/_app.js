import Router from 'next/router';
import NProgress from 'nprogress';

import React from 'react';
import { Provider } from 'react-redux';

import store from '../src/app/store';
import Layout from '../src/components/Layout';
import { firebaseInit } from '../src/app/config/firebase';

Router.events.on('routeChangeStart', (url) => {
  // console.log(`Loading: ${url}`);
  // console.log('current', firebaseInit.auth().currentUser);
  (url === '/signin' || url === '/signup') &&
    firebaseInit.auth().currentUser &&
    Router.back();
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props) {
  // console.log('MyApp', props);
  return (
    <Provider store={store}>
      <Layout {...props} />
    </Provider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default MyApp;
