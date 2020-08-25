import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Projects from '../components/projects';
import IndexStyles from '../components/index.module.scss';


const IndexPage = () => {
    return (
        <Layout>
            <h1>Sam Reichle &mdash; Full-stack Developer and MIS Student at the University of Alabama.</h1>
            <div>
                <Link className={IndexStyles.link} to="/about">
                    Learn more about me <span className={IndexStyles.arrow}>&rarr;</span>
                </Link>
            </div>
            <Projects />
        </Layout>
    )
}
export default IndexPage;

