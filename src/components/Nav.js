import React from 'react';

import logo from '../images/troll.png';

export function Nav() {
  return (
    <nav>
      <div className='nav-logo'>
        <img src={logo} alt=''></img>
        <h1>MemeGenerator</h1>
      </div>
      <div className='nav-title'>
        <h3>React Course - Project 3</h3>
      </div>
    </nav>
  );
}
