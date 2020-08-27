import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FooterStyles from '../styles/footer.module.scss';

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p className={FooterStyles.copyright}> © 2020 {data.site.siteMetadata.author}</p>
        </footer>
    )
}

export default Footer;