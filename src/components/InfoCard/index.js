import React from 'react';
import './index.css';
import SocialLinks from '../SocialLinks';
import { links } from './config'

function InfoCard({name, title , profileImageUrl}) {
  return (
    <div className="infocard">
        <img src={profileImageUrl} alt="Puneet's Profile" className='profile-image' />
        <div className='name'>{name}</div>
        <div className='title'>{title}</div>
        <SocialLinks links={links}/>
    </div>
  );
}

export default InfoCard;