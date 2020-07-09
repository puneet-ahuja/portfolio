import React from 'react';
import './index.css';
import { aboutDetails } from './config'
import Tag from '../Tag';

function AboutSection() {
    
    return (
        <div className="about-section" >
            <div className='about-section-heading'>Hi I'm Puneet.</div>
            <div className='about-section-subheading'>Currently, I am working/learning at OLX India Pvt. Ltd. based in Gurgaon India.</div>
            <div className='about-section-subheading'>I'm a frontend engineer with passion of writing scalable, easy-to-ubderstand abd clean-UIs.</div>
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