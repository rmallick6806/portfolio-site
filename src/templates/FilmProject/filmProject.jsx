import React from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";

import playButton from '../../../static/play-button.svg';
import './filmProject.scss';
import SocialLinks from "../../components/SocialLinks/SocialLinks";

export default class FilmProjectTemplate extends React.Component {

  createMarkup = (string) => {
    return {__html: string};
  }

  renderAwards = (awards) => {
    const arr = [];
    awards.forEach((award, idx) => {
      arr.push(award.name);
    });
    return <span className='award-item'>{arr.join(', ')}</span>;
  }

  renderLongDescription = (paras) => {
    return paras.map((para, idx) => (
      <p key={idx} className='movie-description' dangerouslySetInnerHTML={this.createMarkup(para)}></p>
    ));
  }

  renderParagraphs = (paras) => {
    return paras.map((para, idx) => (
      <div key={idx} className='movie-paragraphs' dangerouslySetInnerHTML={this.createMarkup(para)}></div>
    ));
  }

  renderVideoBanner = (img, video) => {
    return (
      <div 
        className='banner-player mb-4'
        style={{backgroundImage: `url(${img})`}}
      >
        <a href={video}>
          <img className='play-button' src={playButton}></img>
        </a>
      </div>
    );
  }

  render() {
    const { pageContext } = this.props;
    const { 
      id,
      bannerImg,
      bannerVideo,
      longDescription, 
      duration, 
      genre, 
      header, 
      awards, 
      paragraphs,
      poster
    } = pageContext;
    return (
      <Layout>
        <Helmet><title>{`${header || config.siteTitle}`}</title></Helmet>
        <div className='film-project'>
          <div className='main-banner-container container'>
            {this.renderVideoBanner(bannerImg, bannerVideo)}
            <div className='movie-headline'>{header}</div>
            <div className='col color-border-line mb-4 mt-3' />
            <div className='row'>
              <div className='col-lg-4'>
                <img className='banner-img-container' src={poster} />
              </div>
              <div className='col banner-header-container'>
                {this.renderLongDescription(longDescription)}
                {
                  (awards.length > 0) ? 
                    <div className='awards-section banner-text'>
                      <strong>Awards: </strong> {this.renderAwards(awards)}
                    </div> : null
                }
                <div className='genre-section banner-text'>
                  <strong>Genre: </strong>
                  {genre}
                </div>
                <div className='duration-section banner-text'>
                  <strong>Duration: </strong>
                  {duration}
                </div>                
              </div>
            </div>
            {this.renderParagraphs(paragraphs)}
            <div className='social-link-container mt-5 mb-5'>
              <SocialLinks pageContext={pageContext}/>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
