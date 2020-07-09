import React from 'react';
import './index.css';

function SocialLinks({links=[]}) {
    if(links.length === 0){
        return null;
    }
    return (
        <div className="social-links-container">
            {links.map((link,index) => {
                const { href, iconUrl, alt} = link
                // eslint-disable-next-line react/jsx-no-target-blank
                return <a className='icon' href={href} key={index} target='_blank'><img className='icon-image'src={iconUrl} alt={alt}/></a>
            })}
            
        </div>
    );
}

export default SocialLinks;