/**
 *
 * Header
 *
 */
import Link from 'next/link';

import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer } from './styles';
// import PropTypes from 'prop-types';

import { selectMain } from '../../app/slice';

function Header(props) {
  const selector = useSelector(selectMain);
  const { auth } = selector;

  const signout = () => {
    console.log('sigout');
    props.firebase
      .auth()
      .signOut()
      .then(function () {
        console.log(' Sign-out successful');
      })
      .catch(function (error) {
        console.log(' An error happened');
      });
  };
  // console.log('header', props);
  return (
    <HeaderContainer>
      <nav>
        <Link href="/">
          <a>Anasayfa</a>
        </Link>{' '}
        |{' '}
        {auth ? (
          <span onClick={signout}>çıkış</span>
        ) : (
          <React.Fragment>
            <Link href="/auth" as="/signin">
              <a>giris</a>
            </Link>{' '}
            |{' '}
            <Link href="/auth/signup" as="/signup">
              <a>kayıt</a>
            </Link>
          </React.Fragment>
        )}{' '}
        |{' '}
        <Link href="/product">
          <a>ürünler</a>
        </Link>{' '}
        |{' '}
        <Link href="/product/[id]" as="/product/urun1">
          <a>ürün 1</a>
        </Link>{' '}
        |{' '}
        <Link href="/book">
          <a>kitaplar</a>
        </Link>{' '}
        |{' '}
        <Link href="/book/[id]" as="/book/1">
          <a>kitap 1</a>
        </Link>
      </nav>
    </HeaderContainer>
  );
}

// Header.propTypes = {};

export default Header;
