import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

// import './header.module.scss';
import HeaderStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql `
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className={HeaderStyles.header}>
            <h1>
                <Link className={HeaderStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1>
            <ul className={HeaderStyles.navList}>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/">Home</Link></li>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/about">About</Link></li>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/projects">Projects</Link></li>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/blog">Blog</Link></li>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Header;