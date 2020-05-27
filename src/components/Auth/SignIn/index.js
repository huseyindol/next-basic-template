/**
 *
 * SignIn
 *
 */

import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { selectSignIn } from "./slice";
import { SignInContainer } from './styles';
// import PropTypes from 'prop-types';
import { firebaseInit } from '../../../app/config/firebase';

function SignIn() {
  // const SignInState = useSelector(selectSignIn);
  // const dispatch = useDispatch();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log('signin submit', formData);
    firebaseInit
      .auth()
      .signInWithEmailAndPassword(formData.email, formData.password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
      });
  };
  return (
    <SignInContainer>
      SignIn
      <form onSubmit={onSubmitHandle}>
        <input name="email" />
        <input name="password" />
        <button type="submit">Giriş</button>
      </form>
    </SignInContainer>
  );
}

SignIn.propTypes = {};

export default SignIn;
