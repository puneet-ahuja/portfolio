/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './index.css';
import { blogs } from './config'

function BlogsSection() {    
    return (
        <div className='blogs-container'>
            {blogs.map(( {title, description, url, imageUrl}, index )=>{
                return (
                    <div className='blog-container' key={index}>
                        <img className='blog-image' src={imageUrl} alt={title}/>
                        <div className='blog-details'>
                            <div className='blog-title'>{title}</div>
                            <div className='blog-description'>{description}</div>
                            <a className='blog-link' href={url} target='_blank'>Read More ...</a>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    );
}

export default BlogsSection;