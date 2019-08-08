import React from 'react';
import './_features.scss';
import { Link } from 'gatsby';

const Featured = (props) =>
  (
    <section>
    <div className="container featured">
      <div className="row">
        <div className="col">
          <Link to={"/rock-and-bowl-express"}>
            <div className='main-featured'
              style={{backgroundImage: `url(rock-and-bowl-express-banner.png)`}}>
              <div className='text-container featured-header'>
              Featured
              </div>
              <div className='text-container main-featured-text-container'>
                <div>My latest film.</div>
                <div className='text-sub-heading'>
                  In this mockumentary, a film crew follows the story of three wrestlers, Francisco, Nick and Smitty, as they continually fumble in their hopes of becoming professional wrestlers.
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-4">
          <a href="https://www.motopartpicker.com">
            <div className='second-featured'
              style={{backgroundImage: `url('/mpp-logo.png')`}}>
              <div className='text-container'>Just Launched</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </section>
  );

export default Featured;
