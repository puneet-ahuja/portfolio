import React from 'react';
import './index.css';
import { aboutDetails } from './config'
import Tag from '../Tag';

function AboutSection() {
    
    return (
        <div className="about-section" >
            <div className='about-section-heading'>Hi I'm Puneet.</div>
            <div className='about-section-subheading'>I am currently learning at <strong>OLX India Pvt. Ltd.</strong> as <strong>Front End Engineer</strong></div>
            <div className='about-section-subheading'>I am a <strong>Javascript Enthusiast</strong> with passion of writing scalable, easy-to-understand and clean-UIs.</div>
            {aboutDetails.map((details,index)=>{
                const { title, data=[] } = details
                return (
                    <div>
                        <div className='category-title'>{title}</div>
                        {data.map((value,index)=>{
                            return <Tag value={value} key={index}/>
                        })}
                    </div>
                )
            })}
        </div>
    );
}

export default AboutSection;