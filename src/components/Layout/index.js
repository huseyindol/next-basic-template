/**
 *
 * Layout
 *
 */

import Head from 'next/head';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { selectMain, modifiedData } from '../../app/slice';
import { firebaseInit } from '../../app/config/firebase';
import Header from '../Header';

import { theme } from '../../app/styles';
import { LayoutContainer } from './styles';
// import PropTypes from 'prop-types';

const Layout = (props) => {
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
          dispatch(
            modifiedData({
              name: 'auth',
              data: user && { ...user?.providerData[0] },
            }),
          );
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
      <LayoutContainer>
        <Header firebase={firebaseInit}></Header>
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
      </LayoutContainer>
    </ThemeProvider>
  );
};

// Layout.propTypes = {};

export default Layout;
