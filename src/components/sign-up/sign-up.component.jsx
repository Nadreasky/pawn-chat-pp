import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

const SignUp = ({ signUp }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match!');
      return;
    }

    signUp({ email, password, displayName });
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>Join with me and have fun</h2>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          id='displayName'
          label='Display Name'
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='text'
          name='email'
          id='email'
          label='Email'
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='password'
          id='password'
          label='Password'
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          label='Confirm Password'
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <button type='submit' className='custom-button'>REGISTER</button>
      </form>
    </div>
  )
};

export default SignUp;