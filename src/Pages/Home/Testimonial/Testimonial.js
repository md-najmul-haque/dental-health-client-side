import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonial.css'


const Testimonial = ({ testimonial }) => {
    const { name, img, review } = testimonial
    return (
        <div className='container mb-4'>
            <Card className="text-center">
                <Card.Body>

                    <Card.Title> <img className='profile-image' src={img} alt="" /> {name}</Card.Title>
                    <Card.Text>
                        {review}
                    </Card.Text>

                    <Card.Text>
                        Ratings: <span className='rating-icon'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></span>
                    </Card.Text>

                </Card.Body>


            </Card>
        </div>
    );
};

export default Testimonial;