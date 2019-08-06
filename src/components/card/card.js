import React from 'react';

import './card.scss';
import { Link } from 'gatsby';

const Card = (props) => (
  <div className="col outer-card-container">
    <Link to={props.id} passHref>
      <div className='card-box'>
        <div className='card-container'>
          <div className='img-container' style={{backgroundImage: `url(${props.bannerImg})`}} />
          <div className='text-container pl-2 pr-2'>
            <div>{props.header}</div>
            <div className='sub-text-container'>
              <div className='sub-text-container-genre'>{props.genre}</div>
              <div className='sub-text-container-time'>{props.duration}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
