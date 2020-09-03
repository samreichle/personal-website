import React from 'react';
import ProjectStyles from '../styles/projects.module.scss';
import PDPPreview from '../images/pdp-preview.png';
import IndecisionPreview from '../images/indecision-preview.png';
import GitHubMark from '../images/GitHub-Mark-Light-32px.png';
import ExternalLink from '../images/external-link-32.png';

const Projects = () => {
    return (
        <div>
            <h2>Check out some of my work below!</h2>
            <div className={ProjectStyles.projectPdp}>
                <div className={ProjectStyles.content}>
                    <div></div>
                    <h2>Professional Development Planner</h2>
                    <p className={ProjectStyles.description}>Built for the University of Alabama MIS Program as a way for students to efficiently create, manage, and report their professional goals.</p>
                    <ul className={ProjectStyles.tools}>
                        <li className={ProjectStyles.tool}>React</li>
                        <li className={ProjectStyles.tool}>Redux</li>
                        <li className={ProjectStyles.tool}>SCSS</li>
                    </ul>
                    <div>
                        <a href="https://github.com/samreichle/react-pdp-app" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubMark} alt="GitHub" />
                        </a>
                        <a  className={ProjectStyles.link} href="https://react-pdp-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ExternalLink} alt="LiveLink" />
                        </a>
                    </div>
                </div>
                <div>
                    <img className={ProjectStyles.imagePdp} src={PDPPreview} alt="PDP" /> 
                </div>
            </div>
            <div className={ProjectStyles.projectIndecision}>
                <div className={ProjectStyles.content}>
                    <div></div>
                    <h2>Indecision App</h2>
                    <br />
                    <p className={ProjectStyles.description}>My first React application, this app allows the computer to choose your next move when feeling indecisive.</p>
                    <br />
                    <ul className={ProjectStyles.tools}>
                        <li>React</li>
                        <li className={ProjectStyles.toolIndecision}>SCSS</li>
                    </ul>
                    <div>
                        <a href="https://github.com/samreichle/indecision-app" target="_blank" rel="noopener noreferrer">
                            <img src={GitHubMark} alt="GitHub" />
                        </a>
                        <a className={ProjectStyles.link} href="https://indecision-app-sj.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <img src={ExternalLink} alt="LiveLink" />
                        </a>
                    </div>
                </div>
                <div>
                    <img className={ProjectStyles.imageIndecision} src={IndecisionPreview} alt="PDP" /> 
                </div>
            </div>
        </div>
    )
}

export default Projects;