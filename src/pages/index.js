import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Projects from '../components/projects';


const IndexPage = () => {
    return (
        <Layout>
            <h1>Sam Reichle - Full-stack Developer and MIS Student at the University of Alabama.</h1>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
            <Projects />
        </Layout>
    )
}
export default IndexPage;

