import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Projects from '../components/projects';
import IndexStyles from '../styles/index.module.scss';


const IndexPage = () => {
    return (
        <Layout>
            <h1 className = {IndexStyles.title}>Sam Reichle &mdash; Full-Stack Web Developer and MIS Student at The University of Alabama.</h1>
            <div>
                <Link className={IndexStyles.link} to="/about">
                    Learn more about me <span className={IndexStyles.linkArrow}>&rarr;</span>
                </Link>
            </div>
            <br />
            <br />
            <Projects />
            <center><a className={IndexStyles.scroll} href="#top"><span className={IndexStyles.scrollArrow}>&uarr;</span></a></center>
        </Layout>
    )
}
export default IndexPage;

