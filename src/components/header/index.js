import React from 'react';
import film from '../../../static/film.svg';
import music from '../../../static/music.svg';
import code from '../../../static/code.svg';
import about from '../../../static/about.svg';

import './_header.scss';
import { Link } from 'gatsby';

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
          <div className='col pr-0'>
            <Link to="#films">
              <button type="button" className="btn btn-dark">
                <img src={film}/><span>Films</span>
              </button>
            </Link>
            </div>
          <div className='col pr-0'>
            <Link to="#music">
              <button type="button" className="btn btn-dark">
                <img src={music}/><span>Music</span>
              </button>
            </Link>
          </div>
          <div className='col pr-0'>
            <Link to="#apps">
              <button type="button" className="btn btn-dark">
                <img src={code}/><span>Code</span>
              </button>
            </Link>
          </div>
          <div className='col pr-0'>
            <Link to="#about">
              <button type="button" className="btn btn-dark">
                <img src={about}/><span>About</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );

export default Header;
