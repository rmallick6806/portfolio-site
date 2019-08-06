import React from 'react';
import film from '../../../static/film.svg';
import music from '../../../static/music.svg';
import code from '../../../static/code.svg';
import about from '../../../static/about.svg';

import './_header.scss';

const Header = () =>
  (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className='mt-5'>
              <span className='font-weight-bold'>RAY</span>
              <span className='font-weight-bold'> MALLICK</span>
            </h1>
            <p>Developer. Engineer. Musician. Filmmaker.</p>
          </div>
        </div>

        <div className='row mb-4 pr-2'>
          <div className='col-md-3 pr-0'>
            <button type="button" className="btn btn-dark">
              <a href='#films'><img src={film}/>Films</a>
              </button>
            </div>
          <div className='col-md-3 pr-0'>
            <button type="button" className="btn btn-dark">
              <a href='#music'><img src={music}/>Music</a>
            </button>
          </div>
          <div className='col-md-3 pr-0'>
            <button type="button" className="btn btn-dark">
              <a href='#code'><img src={code}/>Code</a>
            </button>
          </div>
          <div className='col-md-3 pr-0'>
            <button type="button" className="btn btn-dark">
              <a href=''><img src={about}/>About</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );

export default Header;
