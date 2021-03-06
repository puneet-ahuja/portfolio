import React from 'react';
import Experience from './components/Experience'
import { experiences } from './config'

function ExperienceSection() {    
    return (
        <div className='experiences-container'>
            {experiences.map(( experience, index )=>{
                return <Experience {...experience} key={index}/>
            })}
        </div>
    );
}

export default ExperienceSection;