import React from 'react';
import './index.css';
import { videos } from './config'

// TODO : Need to update this card.
function VideosSection() {    
    return (
        <div className='videos-container'>
            {videos.map(( {title, url}, index )=>{
                return (
                    <span className='video-container' key={index}>
                        <iframe src={url} title={title} className='video'></iframe>
                        <span className='video-title' >{title}</span>
                    </span>
                )
            })}
        </div>
    );
}

export default VideosSection;