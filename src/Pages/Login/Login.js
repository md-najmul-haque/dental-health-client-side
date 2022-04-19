import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Pages/Home/Loading/Loading'



const Login = () => {
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;

    let from = location?.state?.from?.pathname || '/';

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [signInWithGoogle] = useSignInWithGoogle(auth);


    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }


    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }


    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    if (user) {
        console.log('user')
        navigate(from, { replace: true })
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        // const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }

    return (
        <div className='w-50 mt-4 mx-auto'>
            <h2 className='text-center'> Please Login</h2>

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

            <p>{errorElement}</p>

            <div className='d-flex justify-content-center align-items-center'>
                <div className='blank-div'></div> <p className='px-2 mt-2'>or</p> <div className='blank-div'></div>
            </div>

            <div className="d-flex justify-content-center my-2">
                <Button onClick={handleSignInWithGoogle} variant="info" type='submit'>Google Sign In</Button>
            </div>


            <p className='my-2 text-center'>New in Health Plus? Please <Link className='text-decoration-none' to='/register'>Register</Link></p>
            <p className='text-center'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            <ToastContainer />
        </div >
    );
};

export default Login;