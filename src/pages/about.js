import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';



const AboutPage = () => {
    return (
        <Layout>
            <h1>About Me</h1>
            <p>bio will show up here later on.</p>
            <p><Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage;