import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import ProjectStyles from './projects.module.scss';
import LayoutStyles from './layout.module.scss';
import Layout from './layout';

const Projects = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            description
                            link
                        }
                        html
                    }
                }
            }
        }
    `)

    return (
        <div>
            <h2>Check out some of my work below!</h2>
            <ul className={ProjectStyles.navList}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <div className={ProjectStyles.project}>
                            <div className={ProjectStyles.projectContent}>
                                <li key={edge.node.frontmatter.title} className={ProjectStyles.navItem}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.description}</p>
                                    <div dangerouslySetInnerHTML={{ __html: edge.node.html }}></div>
                                </li>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Projects;