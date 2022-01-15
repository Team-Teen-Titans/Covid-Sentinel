import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [state, setstate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate({ ...state, [name]: value });
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      console.log('password match --> submitted');

      axios
        .post('/api/user/signup', {
          first_name: state.firstName,
          last_name: state.lastName,
          email: state.email,
          password: state.password,
        })
        .then((res) => {
          console.log(res);
          window.location.href = '/login';
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className='signup-form'>
      <h2>Sign Up</h2>
      <form id='signup'>
        <label>
          First Name:
          <input
            className='border 1px rounded'
            type='text'
            name='firstName'
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            className='border 1px rounded'
            type='text'
            name='lastName'
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            className='border 1px rounded'
            type='text'
            name='email'
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            className='border 1px rounded'
            type='password'
            name='password'
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            className='border 1px rounded'
            type='password'
            name='confirmPassword'
            onChange={handleChange}
            required
          />
        </label>

        {/* <Link to={'/login'}>
          <button> Sign in instead </button>
        </Link> */}
        {/* option to add link back to login if user already has account */}

        <button
          className='btn btn-primary'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {passwordError && <p>Passwords do not match. Please try again.</p>}
    </div>
  );
};

export default SignUp;
