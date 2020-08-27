import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import LayoutStyles from '../styles/layout.module.scss';
import favicon from '../images/sr-favicon.png'

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
        <link rel="icon" type="image/png" href={favicon} />
            <div className={LayoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
            
    )
}

export default Layout;