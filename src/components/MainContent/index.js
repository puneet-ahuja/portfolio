import React from 'react';
import './index.css';
import Section from '../Section';
import { sections } from './config'

function MainContent() {
  return (
    <div className="main-content">
      {sections.map((section,index)=>{
        return(<Section key={index} {...section}></Section>)
      })}
    </div>
  );
}

export default MainContent;