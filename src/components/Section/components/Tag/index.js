import React from 'react';
import './index.css';

function Tag({value}) {    
    return (
        <span className="tag" >
            {value}
        </span>
    );
}

export default Tag;