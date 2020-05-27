/**
 *
 * Header
 *
 */
import Link from 'next/link';

import React from 'react';
import { HeaderContainer } from './styles';
// import PropTypes from 'prop-types';

function Header() {
  return (
    <HeaderContainer>
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
        </Link>{' '}
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
