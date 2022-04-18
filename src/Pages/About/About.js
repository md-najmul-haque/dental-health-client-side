import React from 'react';
import developer from '../../../src/images/developer/developer.jpeg'

const About = () => {
    return (
        <div id='about' className='container'>
            <img className='w-25 mx-auto d-block my-3' src={developer} alt="" />
            <h2 className='text-center'>Md. Najmul Haque</h2>
            <p>I am now a front end developer but i am still in learning stage. I have already learn HTML, CSS, Bootstrap, Tailwind CSS, JavaScript and react. My target is to be a full-stack developer, to achieve my target, I am trying hard to learn about new technology. i want to get job within next two months, preferably in abroad. Now I am giving my best effort to make my dream becomes true.</p>
        </div>
    );
};

export default About;