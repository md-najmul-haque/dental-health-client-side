import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`services.json`)
            .then(res => res.json())
            .then(services => setServices(services))
    }, [])

    return (
        <div className='container mx-auto mb-5'>
            <h2 className='text-center text-info mt-4 mb-3'>Providing Services</h2>

            <div className='row container-fluid'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;