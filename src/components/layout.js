import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import LayoutStyles from '../styles/layout.module.scss';
import favicon from '../images/favicon.ico';

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <Helmet>
                <link rel="icon" href={favicon} />
            </Helmet>
            <div className={LayoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
            
    )
}

export default Layout;