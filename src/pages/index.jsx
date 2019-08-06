import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Features from '../components/features';
import Section from '../components/section';
import Layout from "../layout";
import Header from '../components/header';
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

class Index extends React.Component {

  getSections(sections) {
    return (
      sections.map((section, idx) => {
         return <Section
          key={idx}
          id={section.id}
          title={section.title}
          cards={section.cards}
        />
      })
    );
  }


  render() {
    const props = this.props;
    const films = props.data.allFilmsJson.edges;
    console.log(films, '!!!');
    const sections = props.data.allStoreJson.edges[0].node.sections;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Header />
        <div className="main-container mb-5">
          <Helmet title={config.siteTitle} />
          <SEO />
          <Features />
          <Section 
            key={'films'} 
            id={'films'} 
            title={'A COLLECTION OF FILMS'}
            data={films}
          />
          {/* {this.getSections(sections)} */}
          {/* <PostListing postEdges={postEdges} /> */}
        </div>
      </Layout>
    );
  }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allStoreJson {
      edges {
        node {
          sections {
            id,
            title,
            cards {
              title
            }
          }
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
          bannerImg,
          awards {
            name,
            date
          }
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
