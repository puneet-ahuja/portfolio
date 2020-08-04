import React from 'react';
import './index.css';

// TODO : This is just for testing purpose here.
// Need to verify and move this with perfect logic.
// will verify this from different code base and complete this setup.
function track(linkName){
    window.gtag('event', 'click', {
        'event_category': linkName,
        'event_label': 'SocialLink_Click',
    });
}

function SocialLinks({links=[]}) {
    if(links.length === 0){
        return null;
    }
    return (
        <div className="social-links-container">
            {links.map((link,index) => {
                const { href, iconUrl, alt, name} = link
                // eslint-disable-next-line react/jsx-no-target-blank
                return <a className='icon' href={href} key={index} target='_blank' onClick={()=>{track(name)}}><img className='icon-image'src={iconUrl} alt={alt}/></a>
            })}
            
        </div>
    );
}

export default SocialLinks;