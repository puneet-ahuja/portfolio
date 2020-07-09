import React from 'react';
import './index.css';

function Navigation({ navItems=[] }) {
    if(navItems.length === 0){
        return null;
    }
    return (
        <div className="navigation-container">
            {navItems.map((navItem,index)=>{
                const { title,href } = navItem
                return (
                    <div
                        key={index}
                        className='navigation-item'
                    >
                        <a href={href} className='navigation-link'>{title}</a>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Navigation;