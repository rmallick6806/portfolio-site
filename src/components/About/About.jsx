import React, { Component } from "react";
import "./About.scss";
import { Link } from "gatsby";

class About extends Component {
  render() {
    return (
      <div className='about-me-outer-container'>
        <div className='container photo-container'></div>
        <div id="about" className="container about-me-container">
          {/* <div className='about-me-color-line'/> */}
          <div className='paragraph-container'>
            <h1 className={'mb-4'}><strong>Hi, I'm Ray Mallick.</strong></h1>
            <div>
              <div> 
                <p>
                  I'm a creative professional living in San Francisco, California who loves working with code, music, and media. Currently, I'm a Senior Software Engineer at Warner Media Tech
                  building the next generation of streaming video players and applications for millions of users across the globe. I'm also a founder of MotoPartPicker.com,
                  and freelance for many clients.
                </p>
                <p>
                  I love working as a creator. In the last few years, I've become an avid filmmaker and have founded of RAM Productions, 
                  where you can find me working on my next film project, composing, or writing our next screenplay. I'm also a guitarist for 
                  The Future, where I get to collaborate with some of my closest friends as an indie rock trio.
                </p>
                <p>
                  Feel free to reach to me for freelance work, collaboration, or a friendly chat.
                </p>
                <div className='mt-5'>
                  <span className='mr-3'><Link to={'/RayMallickGeneral2019.pdf'}>Resume</Link></span>
                  <span className='mr-3'><a href="mailto:rmallick6806@gmail.com" target="_top">Email</a></span>
                </div>
              </div>
            </div>
          </div>
          <h3 className='header'>Who Am I?</h3>
        </div>
      </div>
    );
  }
}

export default About;
