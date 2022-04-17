import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='col-sm-12 col-md-6 col-lg-4 mb-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4>{price}</h4>
                    <Button variant="info">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;