import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {

    return (
        <div className='d-flex justify-content-center'>
            <Spinner animation="border" variant="info" />
        </div>
    );
};

export default Loading;