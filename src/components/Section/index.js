import React from 'react';
import './index.css';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import VideosSection from './components/VideosSection'


function Section({title,type,id}) {

    const renderSection = () => {
        switch(type){
            case 'about':
                return <AboutSection/>;

            case 'experience':
                return <ExperienceSection/>

            case 'videos':
                return <VideosSection/>

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