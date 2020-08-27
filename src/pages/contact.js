import React from 'react';
import Layout from '../components/layout.js';
import ContactStyles from '../styles/contact.module.scss';


const ContactPage = () => {
    return (
        <Layout>
            <h1>Contact Information</h1>
            <p>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
            <p><a className={ContactStyles.link} href="mailto: samjhreichle@gmail.com" target="_blank">samjhreichle@gmail.com</a></p>
            <p><a className={ContactStyles.link} href="https://www.linkedin.com/in/samreichle/" target="_blank">LinkedIn</a></p>
        </Layout>
    )
}

export default ContactPage;