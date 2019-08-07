import React from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";

import './filmProject.scss';

export default class FilmProjectTemplate extends React.Component {
  render() {
    const { pageContext } = this.props;
    const { id, bannerImg, header, awards, paragraphs } = pageContext;
    return (
      <Layout>
        <Helmet><title>{`${header || config.siteTitle}`}</title></Helmet>
        <div className='film-project main-banner-container container'>
          <div className='row'>
            <div className='col-md-6'>
              <div 
                className='banner-img-container'
                style={{backgroundImage: `url(${bannerImg})`}} />
            </div>
            <div className='col-md-6 banner-header-container'>
              <div className='movie-headline'>{header}</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
