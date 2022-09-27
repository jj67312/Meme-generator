import React from 'react';
import { useEffect } from 'react';
import memesData from '../memesData.js';

export default function Meme() {
  /**
   * Challenge:
   * 1. Set up the text inputs to save to
   *    the `topText` and `bottomText` state variables.
   * 2. Replace the hard-coded text on the image with
   *    the text being saved to state.
   */

  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  useEffect(() => {
    const memeData = window.localStorage.getItem('memeProject');
    if (memeData !== null) {
      setMeme(JSON.parse(memeData));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('memeProject', JSON.stringify(meme));
  }, [meme]);

  function handleText(event) {
    const { name, value } = event.target;
    setMeme((prevMemeData) => {
      return {
        ...prevMemeData,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <form className='form'>
        <input
          type='text'
          name='topText'
          placeholder='Top text'
          className='form--input'
          onChange={handleText}
          value={meme.topText}
        />
        <input
          type='text'
          name='bottomText'
          placeholder='Bottom text'
          className='form--input'
          onChange={handleText}
          value={meme.bottomText}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>

      <div className='meme'>
        <img src={meme.randomImage} className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText} </h2>
      </div>
    </main>
  );
}
