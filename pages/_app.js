import Link from 'next/link';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from '../src/app/store';
import { selectMain } from '../src/app/slice';
import { firebaseInit } from '../src/app/config/firebase';
import { theme } from '../src/app/styles';

function MyApp(props) {
  // console.log("MyApp", props);
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <nav>
          <Link href="/">
            <a>Anasayfa</a>
          </Link>{' '}
          |{' '}
          <Link href="/auth" as="/signin">
            <a>giris</a>
          </Link>{' '}
          |{' '}
          <Link href="/auth/signup" as="/signup">
            <a>kayıt</a>
          </Link>
        </nav>
        <Layout {...props} />
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
      </Provider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export const Layout = ({ Component, pageProps }) => {
  const selector = useSelector(selectMain);
  const dispatch = useDispatch();

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    let unsubscribe;
    const getUser = async () => {
      unsubscribe = await firebaseInit
        .auth()
        .onAuthStateChanged(function (user) {
          console.log('geldi');
          setUser(user);
        });
    };
    getUser();
    return () => {
      unsubscribe();
    };
  }, []);

  // console.log("Layout", Component, pageProps);
  return <Component {...pageProps} />;
};

export default MyApp;
