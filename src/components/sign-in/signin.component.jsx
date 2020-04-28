import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import './signin.styles.scss';

const SignIn = ({ signInWithEmail }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials;

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  }

  const handleSubmit = event => {
    event.preventDefault();

    signInWithEmail({ email, password });
  }

  return (
    <div className='sign-in'>
      <h2 className='title'>Login for chatting</h2>
      <form className='sign-in-form' onSubmit={handleSubmit}>
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
        <button type='submit' className='custom-button'>LOG IN</button>
      </form>
    </div>
  )
}

export default SignIn;
