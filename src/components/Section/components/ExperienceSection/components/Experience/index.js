import React from 'react';
import './index.css';

function Experience({
    iconUrl,
    designation,
    companyName,
    duration,
    location,
    alt
}) {    
    return (
        <div className='experience-container'>
            <img src={iconUrl} className='experience-icon' alt={alt}/>
            <div className='experience-details'>
                <div className='experience-designation'>{designation}</div>
                <div className='experience-company-name'>{companyName}</div>
                <div className='experience-subheading'>{duration}</div>
                <div className='experience-subheading'>{location}</div>
            </div>
        </div>
    );
}

export default Experience;