
import logo from '../img/kids_first_logo_beta.png'
import signup from '../img/signup.png';
import { Navbar, Form,  Button, Alert } from 'react-bootstrap';
//import { PageTitle } from 'components/shared';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';

import { useMutate } from "restful-react";
import { useRouter } from 'next/router';






const ForgotPasswordConfirmation = () => {
    const router = useRouter();
    const { hash } = router.query
    const [password, setPassword] = useState();
    const [success, setSuccess] = useState();
    const { mutate: forgotPassword, loading, error } = useMutate({
        verb: 'POST',
        path: 'forgot-password/confirmation'
    });

    const onSubmit = e => {
        e.preventDefault();
        setSuccess();
        password && forgotPassword({ password, hash }).then(_ => setSuccess('Your password has been succesfuly changed!'));
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    placeholder="Enter new password" />

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



export default ForgotPasswordConfirmation;