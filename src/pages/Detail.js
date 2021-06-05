import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { MovieContext } from '../context/MovieContext';

import noImage from '../utils/no-image-available.png';
import '../styles/Detail.css';

const Detail = () => {
  // React Router'daki dinamik URL kısmını almalıyız (useParams)

  const { showDetail, selectedMovie } = useContext(MovieContext);
  let dynamicUrl = useParams()
  useEffect(() => {
    showDetail(dynamicUrl.id);
   // useParams ile alınan film id'sini kullanınız.
  }, []);

  return (
    <div className='detail-container'>
      <div className='poster'>
        {selectedMovie.Poster === 'N/A' ? (
          <img src={noImage} alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        )}
      </div>
      <div className='info'>
        <div className='field'>
          <div className='label'>Title</div>
          <div>{selectedMovie.Title}</div>
        </div>
        <div className='field'>
          <div className='label'>Released</div>
          <div>{selectedMovie.Released}</div>
        </div>
        <div className='field'>
          <div className='label'>Runtime</div>
          <div>{selectedMovie.Runtime}</div>
        </div>
        <div className='field'>
          <div className='label'>Genre</div>
          <div>{selectedMovie.Genre}</div>
        </div>
        <div className='field'>
          <div className='label'>IMDB Rating</div>
          <div>{selectedMovie.imdbRating}</div>
        </div>
        <div className='field'>
          <div className='label'>Director</div>
          <div>{selectedMovie.Director}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
