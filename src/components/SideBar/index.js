import React from 'react';
import './index.css';
import InfoCard from '../InfoCard';
import Navigation from '../Navigation';
import { navItems } from './config'

// TODO : Need to pass data from some other place.
function SideBar() {
  return (
    <div className="sidebar">
      <InfoCard
        name={'Puneet Ahuja'}
        title={'SDE@OLX Group | Ex-SDE@Housing.com | Front end Developer | Javascript Enthusiast'}
        profileImageUrl={'/assets/Profile.jpeg'}
      />
      <Navigation
        navItems={navItems}
      />

    </div>
  );
}

export default SideBar;