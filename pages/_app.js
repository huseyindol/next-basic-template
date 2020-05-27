import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../src/app/store';
import { selectMain } from '../src/app/slice';
import { firebaseInit } from '../src/app/config/firebase';
import { theme } from '../src/app/styles';
import Header from '../src/components/Header';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);

  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp(props) {
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

export const Layout = (props) => {
  const { Component, pageProps } = props;

  const selector = useSelector(selectMain);
  const dispatch = useDispatch();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    let unsubscribe;
    const getUser = async () => {
      unsubscribe = await firebaseInit
        .auth()
        .onAuthStateChanged(function (user) {
          console.log('geldi', user);
          setUser(user);
        });
    };
    getUser();
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log('Layout', props);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Header></Header>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default MyApp;
