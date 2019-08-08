import { Link } from 'gatsby';
import React from 'react';
import './card.scss';


const CardWrapper = (props) => {
  const { linkOnly, url, id, children } = props;
  if (linkOnly) {
    return (
      <a href={url}>
        {children}
      </a>
    );
  }

  return (
    <Link to={"/" + id}>
      {children}
    </Link>
  );
};

const Card = (props) => {
  const { id, poster, duration, genre, stack, linkOnly, url } = props;
  return (
    <div className="col outer-card-container">
    <CardWrapper {...props}>
      <div className='card-box'>
        <div className='card-container'>
          <div className='img-container' style={{backgroundImage: `url(${props.poster})`}} />
          <div className='text-container pl-2 pr-2'>
            <div>{props.header}</div>
            <div className='sub-text-container'>
              <div className='sub-text-container-genre'>{props.genre}</div>
              <div className='sub-text-container-tag'>{stack || duration}</div>
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  </div>
  )
};

export default Card;
