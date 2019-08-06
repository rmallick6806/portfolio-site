import React from "react";
import Helmet from "react-helmet";
import Layout from "../../layout";
import config from "../../../data/SiteConfig";

export default class FilmProjectTemplate extends React.Component {
  render() {
    const { pageContext } = this.props;
    const { id, bannerImg, header, awards, paragraphs } = pageContext;
    console.log(this.props, '!!!!');
    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${config.siteTitle}`}</title>
          </Helmet>
          <img src={this.props.pageContext.bannerImg}></img>
          <div>
						<h1>Rock and Bowl Express</h1>
          </div>
        </div>
      </Layout>
    );
  }
}