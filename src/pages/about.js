import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';
import AboutStyles from '../styles/about.module.scss';
import ProfilePic from '../images/profile-pic.png';




const AboutPage = () => {
    return (
        <Layout>
            <div className={AboutStyles.flex}>
                <div>
                    <img className={AboutStyles.imageMobile} src={ProfilePic} alt="Profile Pic" />
                </div>
                <div className={AboutStyles.left}>
                    <div className={AboutStyles.content}>
                        <center><h2>About Me</h2></center>
                        <p>
                            I'm Sam Reichle (rīk-lee), a software developer and student striving to create high-quality, conducive software that will enrich the lives of its users. 
                            I am currently pursuing a Bachelor's degree in Management Information Systems at The University of Alabama. Roll Tide!
                        </p>
                        <p> 
                            My time at The University of Alabama and work as a web developer has equipped me with the knowledge and skills necessary to become proficient in the design and development of IT. 
                            I have learned the nuances of building enterprise applications using industry wide standardized tools and frameworks.
                            I have gained proficiency in understanding requirements, architecting a solution, and implementing the solution as running software.
                            Most of all, I have acquired valuable experience working with teams of other professionals to create and implement strategies that result in meaningful projects.
                        </p>
                        <p>
                            I am currently looking to fill an entry level Technical Consulting or Web Development role at an innovative company where I can make an immediate impact.
                            If you are looking for someone to fill this kind of role, please <Link className={AboutStyles.link} to="/contact">contact me</Link>.
                        </p>
                    </div>
                    <div className={AboutStyles.skillsContent}>
                        <center><h3>Tech Skills</h3></center>
                        <div className={AboutStyles.skills}>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                            </ul>
                            <ul>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>C#</li>
                            </ul>
                            <ul>
                                <li>React</li>
                                <li>Gatsby</li>
                                <li>GraphQL</li>
                            </ul>
                            <ul>
                                <li>ASP.NET Core MVC</li>
                                <li>jQuery</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <img className={AboutStyles.image} src={ProfilePic} alt="Profile Pic" />
                </div>
            </div>
        </Layout>
    )
}

export default AboutPage;