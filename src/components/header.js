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
            <ul className={HeaderStyles.navList}>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/">Home</Link></li>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/about">About</Link></li>
                <li><Link className={HeaderStyles.navItem} activeClassName={HeaderStyles.activeNavItem} to="/contact">Contact</Link></li>
            </ul>
            <Link className={HeaderStyles.navItem} to="/">Sam Reichle</Link>
        </div>
    )
}

export default Header;