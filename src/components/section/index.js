import React from 'react';
import './section.scss';

import Card from '../card/card';
import { sortByDate } from '../../utils/sortUtils';

const EmptySection = () => (
    <div className='col-md-6 mt-5 mb-5'>
      <h2> Portfolio upload in progress... </h2>
  </div>
);

const Section = (props) => (
  <div className={`container section-container mt-4`}
    id={props.id}>
    <div className="row">
      <div className="col">
        <p className="section-title">{props.title}</p>
      </div>
    </div>
    <div className="row">
    {
      (props.data.length > 0) ?
      props.data.sort(sortByDate).map((card, idx) => {
        return <Card key={idx} idx={idx * Math.random()} {...card.node} />
      }) : <EmptySection />
    }
    </div>
  </div>
);

export default Section;
