import React from 'react';
import user1 from '../../../images/user/user1.png'
import user2 from '../../../images/user/user2.png'
import user3 from '../../../images/user/user3.png'
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {



    const testimonials = [
        {
            id: 1, name: 'Nada Esa', img: `${user1}`, review: 'We had a very pleasant experience with Dr. Whadh Hanlk and her staff. My daughter was very anxious about the appointment and any procedure, but doctor was very patient with his and spend a lot of time trying to calm her down, the staff was very helpful and kind and always available to help. '
        },
        {
            id: 2, name: 'Susan Mara', img: `${user2}`, review: 'There are no words to describe how WONDERFUL my experience with Pleasant Street Dental is with Dr. Whadh Hanlk and his staff! Greeted with respect, dignity and a deep desire to provide the best possible care for her patients and their many, diverse needs.'
        },
        { id: 3, name: 'Aliyah Jordan', img: `${user3}`, review: 'Excellent doctor!!!Very thorough and caring. I am terribly afraid of the dentist and she is very sensitive to that and goes the extra mile to make you feel comfortable.' }
    ]

    return (
        <div id='testimonials'>
            <h2 className="text-info text-center">
                Testimonials
            </h2>
            {
                testimonials.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial} ></Testimonial>)
            }
        </div>
    );
};

export default Testimonials;