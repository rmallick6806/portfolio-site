import React from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";

export default class FilmProjectTemplate extends React.Component {
  render() {
    const { pageContext } = this.props;
    const { id, bannerImg, header, awards, paragraphs } = pageContext;
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${header || config.siteTitle}`}</title>
          </Helmet>
          <img src={bannerImg}></img>
          <div>
						<h1>{header}</h1>
          </div>
        </div>
      </Layout>
    );
  }
}