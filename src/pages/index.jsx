import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Features from '../components/features';
import Section from '../components/section';
import Layout from "../layout";
import Header from '../components/header';
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import About from "../components/About/About";

class Index extends React.Component {
  getSections(films = [], music = [], apps = []) {
    const sections = [
      {
        id: 'films',
        title: 'A COLLECTION OF FILMS',
        data: films
      },
      {
        id: 'apps',
        title: 'GAMES, PROJECTS, AND APPS',
        data: apps
      },      
      {
        id: 'music',
        title: 'ORIGINAL MUSIC AND SOUNDTRACKS',
        data: music
      }     
    ]; 
    return (
      sections.map((section, idx) => {
         return <Section 
          key={section.id} 
          id={section.id} 
          title={section.title}
          data={section.data}
       />
      })
    );
  }

  render() {
    const props = this.props;
    const films = props.data.allFilmsJson.edges;
    const apps = props.data.allAppsJson.edges;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Header />
        <div className="main-container mb-5">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Features />
          {this.getSections(films, [], apps)}
          {/* <PostListing postEdges={postEdges} /> */}
        </div>
        <About />
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allAppsJson {
      edges {
        node {
          id,
          date,
          header,
          genre,
          stack,
          poster,
          url,
          linkOnly
        }
      }
    },
    allFilmsJson {
      edges {
        node {
          id,
          date,
          header,
          genre,
          duration,
          poster
        }
      }
    },    
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
