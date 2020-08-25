import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Projects = (props) => {
    return (
        <Layout>
            <h1><a href={props.data.markdownRemark.frontmatter.link}>{props.data.markdownRemark.frontmatter.title}</a></h1>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Projects;