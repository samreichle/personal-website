import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';
import AboutStyles from '../styles/about.module.scss';
import ProfilePic from '../images/profile-pic.png';




const AboutPage = () => {
    return (
        <Layout>
            <h1>Hi there.</h1>
            <div className={AboutStyles.flex}>
                <div>
                    <img className={AboutStyles.imageMobile} src={ProfilePic} alt="Profile Pic" />
                </div>
                <div>
                    <p>
                        My name is Sam Reichle (rīk-lee), and I am a Full-Stack Web Developer striving to create high-quality, conducive websites and web applications. 
                        I am currently pursuing a Bachelor's degree in Management Information Systems at The University of Alabama. Roll Tide!
                    </p>
                    <p> 
                        My time at The University of Alabama has been spent gaining the knowledge and skills necessary to become proficient in the design and development of IT. 
                        I have worked with HTML5, CSS, ES6/ES7JavaScript and frameworks including React and Gatsby to build cutting-edge websites and applications. 
                        I have learned the syntax and design patterns of Java and built applications that add, pull, and manipulate data from a SQL database.
                    </p>
                    <p>
                        My work experiences have taught me the importance of adaptability, communication, and planning. I value hard work and perseverance and believe these to be important components for success.
                    </p>
                    <p>
                        When not coding, you may find me riding my bike, reading a new historical fiction novel, or catching whatever sports games are on with my friends. I believe setting aside some personal time away from work
                        is important for personal health and productivity.
                    </p>
                    <p>
                        My long-term goal is to become a senior software engineer, but I am currently looking to join a web development team at an innovative company where I can make an immediate impact.
                        If you are looking for someone to fit this kind of role, please <Link className={AboutStyles.link} to="/contact">contact me</Link>.
                    </p>
                </div>
                <div>
                    <img className={AboutStyles.image} src={ProfilePic} alt="Profile Pic" />
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;