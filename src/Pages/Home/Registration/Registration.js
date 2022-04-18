import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegistration = event => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value;
        // console.log(name, email, password)
        createUserWithEmailAndPassword(email, password);
    }

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }

    return (
        <div className='mt-3'>
            <h2 className='text-center'>Please Register</h2>

            <Form onSubmit={handleRegistration} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>

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
                <Button variant="primary" type="submit">
                    Registration
                </Button>
            </Form>
            <div className='d-flex justify-content-center align-items-center'>
                <div className='blank-div'></div> <p className='px-2 mt-2'>or</p> <div className='blank-div'></div>
            </div>

            <div className="d-flex justify-content-center my-2">
                <Button onClick={handleSignInWithGoogle} variant="info" type='submit'>Google Sign In</Button>
            </div>

            <p className='text-center'>Already registered? <Link to='/login' className='text-decoration-none'>Login</Link></p>


        </div>
    );
};

export default Register;