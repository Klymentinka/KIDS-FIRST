import React from 'react'
import logo from '../img/kids_first_logo_beta.png'
import signup from '../img/signup.png';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/"><img src={logo} className="logo" alt="" /></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="navbar-text">
            Already a member? <a href="/Signin">Log in</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src={signup} alt='spaceship' />
        </div>


        <div className='form-content-right'>
          <form className='form' noValidate>
            <h1 className="form-title">
              Sign up Kids First
            </h1>

            <div className='form-inputs'>
              <label className='form-label mt-4'>Email</label>
              <input
                className='form-input'
                type='email'
                name='email'

              />
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                name='password'

              />
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Confirm Password</label>
              <input
                className='form-input'
                type='password'
                name='password2'

              />
            </div>
            <button className='form-input-btn' type='submit'>
              <p className="signup-form">Sign up</p>
            </button>

          </form>
        </div>
      </div>
    </>

  )
}
