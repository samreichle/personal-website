import React from 'react';
import Layout from '../components/layout.js';
import ContactStyles from '../styles/contact.module.scss';


const ContactPage = () => {
    return (
        <Layout>
                <h1 className={ContactStyles.centerContent}>Contact Information</h1>
                <p className={ContactStyles.centerContent}>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
                <p className={ContactStyles.centerContent}><a className={ContactStyles.link} href="mailto: sreichle@crimson.ua.edu" target="_blank">sreichle@crimson.ua.edu</a></p>
                <p className={ContactStyles.centerContent}><a className={ContactStyles.link} href="https://www.linkedin.com/in/samreichle/" target="_blank">LinkedIn</a></p>
                <p className={ContactStyles.centerContent}><a className={ContactStyles.link} href="https://github.com/samreichle" target="_blank">GitHub</a></p>

        </Layout>
    )
}

export default ContactPage;