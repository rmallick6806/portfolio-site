import React from 'react';
import './_features.scss';

const Featured = (props) =>
  (
    <section>
    <div className="container featured">
      <div className="row">
        <div className="col-md-8">
          <div className='main-featured'
            style={{backgroundImage: `url(https://picsum.photos/4${Math.floor(Math.random() * 100)}/300/?random)`}}>
            <div className='text-container featured-header'>
             Featured
            </div>
             <div className='text-container'>
               <div>Checkout this film.</div>
               <div className='text-sub-heading'>
                 Its a mockumentary about wrestling, directed, written, and
                 produced by Ray Mallick. The film stars real wrestlers Francisco Colon, Nick, and Jospeh Smithey
               </div>
             </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className='second-featured'
            style={{backgroundImage: `url(https://picsum.photos/4${Math.floor(Math.random() * 100)}/?random)`}}>
            <div className='text-container'>Brand New</div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );

export default Featured;
