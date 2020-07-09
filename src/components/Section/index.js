import React from 'react';
import './index.css';
import AboutSection from './components/AboutSection'

function Section({title,type,id}) {

    const renderSection = () => {
        switch(type){
            case 'about':
                return <AboutSection/>

            default: 
            break;

        }
    }
    
    return (
        <div className="section" id={id}>
            {title && <div className='section-title'>{title}</div>}
            {renderSection()}
        </div>
    );
}

export default Section;