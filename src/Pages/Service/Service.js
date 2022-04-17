import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3 mx-auto'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4>{price}</h4>
                    <Button onClick={handleCheckout} variant="info">Checkout</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;