import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css'



// const [user] = useAuthState(auth);

const Login = () => {

    // const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {

        signInWithGoogle();
    }

    if (user) {
        console.log('user')
        navigate(from, { replace: true })
    }

    return (
        <div className='w-50 mt-4 mx-auto'>
            <h2 className='text-center'> Please Login</h2>

            <div className="d-flex justify-content-center mt-2">
                <Button onClick={handleSignInWithGoogle} variant="info" type='submit'>Google Sign In</Button>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='blank-div'></div> <p className='px-2 mt-2'>or</p> <div className='blank-div'></div>
            </div>
            <Form onSubmit={handleSignIn}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>


                <Button variant="info" type="submit">
                    Login
                </Button>

            </Form>
            <p className='my-2 text-center'>New in Health Plus? Please <Link className='text-decoration-none' to='/register'>Register</Link></p>

        </div >
    );
};

export default Login;