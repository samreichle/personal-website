import React from 'react';
import Layout from '../components/layout.js';
import { graphql, useStaticQuery } from 'gatsby';


const ProjectPage = () => {
    // const post = useStaticQuery (graphql `
    //     query {
    //         allMarkdownRemark {
    //             edges {
    //                 node {
    //                     frontmatter {
    //                         title
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // `)
    
    return (
        <Layout>
            <h1>Projects</h1>
        </Layout>
    )
}

export default ProjectPage;


// to go after h1
            // <ol>
            //     {post.allMarkdownRemark.edges.map((edge) => {
            //         return (
            //             <li key={edge.node.frontmatter.title}>
            //                 <h2>{edge.node.frontmatter.title}</h2>
            //                 <a href={edge.node.frontmatter.link} target="_blank">Link</a>
            //             </li>
            //         )
            //     })}
            // </ol>