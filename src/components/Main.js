import React from 'react';

import img from '../images/test.jpg';
import memesData from '../memesData';

export function Main() {
  function getImage() {
    // randomly pick up an image from the memesData file
    const memeData = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeData.length);
    console.log(memeData[randomIndex].url);
  }

  return (
    <main>
      <div className='main-body'>
        <form action='#'>
          <div className='main-input'>
            <input type='text' placeholder='Top text' autoFocus='autofocus' />
            <input type='text' placeholder='Bottom text' />
          </div>
          <button className='btn' onClick={getImage}>
            Get a new meme image
          </button>
        </form>
      </div>
      <div className='main-img'>
        <img src={img} alt=''></img>
      </div>
    </main>
  );
}
