import React from 'react';
import './section.scss';

import Card from '../card/card';

const Section = (props) =>
  (
    <div className={`container section-container mt-4`}
      id={props.id}>
      <div className="row">
        <div className="col">
          <p className="section-title">{props.title}</p>
        </div>
      </div>
      <div className="row">
      {
        props.data.map((card, idx) => {
          return <Card key={idx} idx={idx * Math.random()} {...card.node} />
        })
      }
      </div>
    </div>
  );

export default Section;
