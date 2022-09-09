import React from 'react';

import memesData from '../memesData';

export function Main() {
  const [memeImage, setMemeImage] = React.useState('');

  function getImage() {
    // randomly pick up an image from the memesData file
    const memeData = memesData.data.memes;
    const randomIndex = Math.floor(Math.random() * memeData.length) + 1;
    setMemeImage(memeData[randomIndex].url);
  }

  const isGoingOut = false;
  let answer = isGoingOut ? 'Yes' : 'No';

  return (
    <main>
      <div className='main-body'>
        <div className='main-input'>
          <input type='text' placeholder='Top text' autoFocus='autofocus' />
          <input type='text' placeholder='Bottom text' />
        </div>
        <button className='btn' onClick={getImage}>
          Get a new meme image
        </button>
      </div>
      <div className='main-img'>
        <img src={memeImage} alt=''></img>
      </div>
    </main>
  );
}
