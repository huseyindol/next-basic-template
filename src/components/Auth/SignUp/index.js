/**
 *
 * SignUp
 *
 */
import Router from 'next/router';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSignUp } from './slice';
import { SignUpContainer } from './styles';
// import PropTypes from 'prop-types';
import { firebaseInit } from '../../../app/config/firebase';

function SignUp() {
  const SignUpState = useSelector(selectSignUp);
  const dispatch = useDispatch();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    formData = Object.fromEntries(formData);
    console.log('signup submit', formData);
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(() => Router.back())
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
      });
  };
  return (
    <SignUpContainer>
      SignUp
      <form onSubmit={onSubmitHandle}>
        <input type="text" name="email" />
        <input type="password" name="password" required />
        <button type="submit">Kaydet</button>
      </form>
    </SignUpContainer>
  );
}

SignUp.propTypes = {};

export default SignUp;
