import logo from '../../img/kids_first_logo_beta.png'
import signup from '../../img/signup.png';
import { Navbar, Form,  Button, Alert } from 'react-bootstrap';
//import { PageTitle } from 'components/shared';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';

import { useMutate } from "restful-react";
//import { useRouter } from 'next/router';
//import { forgotpassword } from '../actions/userActions';







const ForgotPassword = () => {
    const [email, setEmail] = useState();
  const [success, setSuccess] = useState();
  const { mutate: forgotPassword, loading, error } = useMutate({
    verb: 'POST',
    path: 'forgot-password'
  });

    const onSubmit = e => {
        e.preventDefault();
        setSuccess();
        email && forgotPassword({ email }).then(_ => setSuccess('Check your email'));
    }

    return (




        <div className="bwm-form">
            <Navbar>
                <Navbar.Brand href="/"><img src={logo} className="logo" alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="navbar-text">
                        Not a member? <a href="/Signup">Sign up now</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>

            <div className='form-container'>
                <div className='form-content-left'>
                    <img className='form-img' src={signup} alt='spaceship' />
                </div>
                <div className='form-content-right'>
                    <form className='form' onSubmit={onsubmit}>
                        <h1 className="form-title">
                            Forgot Password
                        </h1>
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    placeholder="Enter email" />

                            </Form.Group>
                            {error &&
                                <Alert variant="danger">
                                    {error?.data}
                                </Alert>
                            }
                            {success &&
                                <Alert variant="success">
                                    {success}
                                </Alert>
                            }
                            <Button
                                disabled={loading}
                                variant="primary"
                                type="submit">
                                Submit
                            </Button>
                        </Form>
                    </form>
           
                </div>
            </div>
        </div>




             
    )
}



export default ForgotPassword;