import React from 'react';
import './index.css';
import { videos } from './config'

// TODO : Need to update this card.
function VideosSection() {    
    return (
        <div>
            {videos.map(( {title, url}, index )=>{
                return <iframe src={url} title={title} className='video'></iframe>
            })}
        </div>
    );
}

export default VideosSection;