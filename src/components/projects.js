import React from 'react';
import ProjectStyles from '../styles/projects.module.scss';
import PDPPreview from '../images/pdp-preview.png';
import IndecisionPreview from '../images/indecision-preview.png';

const Projects = () => {
    return (
        <div>
            <h2>Check out some of my work below!</h2>
            <div className={ProjectStyles.project}>
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
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.658 5.225a9.956 9.956 0 00-3.639-3.64C13.487.693 11.814.246 10 .246c-1.813 0-3.487.447-5.019 1.34a9.955 9.955 0 00-3.639 3.64C.447 6.757 0 8.43 0 10.245c0 2.178.636 4.138 1.908 5.878 1.271 1.74 2.914 2.945 4.928 3.613.234.044.408.013.52-.09a.51.51 0 00.17-.391l-.007-.703c-.004-.443-.006-.83-.006-1.16l-.3.053c-.19.035-.432.05-.723.045a5.504 5.504 0 01-.904-.09 2.021 2.021 0 01-.873-.391 1.652 1.652 0 01-.573-.8l-.13-.3a3.25 3.25 0 00-.41-.664c-.187-.244-.375-.408-.566-.495l-.091-.065a.957.957 0 01-.17-.157.715.715 0 01-.117-.182c-.026-.061-.004-.11.065-.15.07-.04.195-.058.378-.058l.26.039c.174.034.389.138.645.312s.466.4.631.677c.2.356.44.627.723.814.282.186.566.28.853.28.286 0 .533-.022.742-.065a2.59 2.59 0 00.586-.196c.078-.582.29-1.028.638-1.34a8.92 8.92 0 01-1.335-.235 5.311 5.311 0 01-1.224-.508 3.505 3.505 0 01-1.048-.873c-.278-.347-.506-.803-.684-1.367-.177-.564-.266-1.215-.266-1.953 0-1.05.343-1.944 1.028-2.682-.321-.79-.29-1.675.091-2.656.252-.078.625-.02 1.12.176.495.195.857.362 1.087.5.23.14.415.257.554.352a9.245 9.245 0 012.5-.338c.859 0 1.693.113 2.5.338l.495-.312a7.01 7.01 0 011.197-.573c.46-.173.812-.221 1.055-.143.39.98.426 1.866.104 2.656.686.738 1.03 1.632 1.03 2.682 0 .738-.09 1.391-.268 1.96-.178.569-.407 1.024-.69 1.367a3.642 3.642 0 01-1.054.866c-.421.234-.83.403-1.224.508-.396.104-.84.182-1.335.234.451.39.677 1.007.677 1.85v2.746c0 .156.054.287.163.39.108.105.28.135.514.092 2.014-.669 3.657-1.873 4.928-3.613 1.272-1.74 1.908-3.7 1.908-5.88 0-1.813-.448-3.486-1.342-5.018z" fill="#47535E" />
                            </svg>
                        </a>
                        <a className={ProjectStyles.link} href="https://react-pdp-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)" fill="#47535E">
                                <path d="M19.076.222H13.22a.924.924 0 100 1.848h3.625l-8.86 8.86a.924.924 0 001.307 1.306l8.86-8.86v3.626a.924.924 0 101.848 0V1.146a.925.925 0 00-.924-.924z" />
                                <path d="M15.296 7.925a.924.924 0 00-.924.924v9.081H1.848V5.406h9.627a.924.924 0 100-1.848H.924A.924.924 0 000 4.482v14.372a.924.924 0 00.924.924h14.372a.924.924 0 00.924-.924V8.85a.924.924 0 00-.924-.924z" />
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                    <path fill="#fff" d="M0 0h20v20H0z" />
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img className={ProjectStyles.image} src={PDPPreview} alt="PDP" /> 
                </div>
            </div>
            <div className={ProjectStyles.project}>
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
                        <a href="https://github.com/samreichle/react-pdp-app" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.658 5.225a9.956 9.956 0 00-3.639-3.64C13.487.693 11.814.246 10 .246c-1.813 0-3.487.447-5.019 1.34a9.955 9.955 0 00-3.639 3.64C.447 6.757 0 8.43 0 10.245c0 2.178.636 4.138 1.908 5.878 1.271 1.74 2.914 2.945 4.928 3.613.234.044.408.013.52-.09a.51.51 0 00.17-.391l-.007-.703c-.004-.443-.006-.83-.006-1.16l-.3.053c-.19.035-.432.05-.723.045a5.504 5.504 0 01-.904-.09 2.021 2.021 0 01-.873-.391 1.652 1.652 0 01-.573-.8l-.13-.3a3.25 3.25 0 00-.41-.664c-.187-.244-.375-.408-.566-.495l-.091-.065a.957.957 0 01-.17-.157.715.715 0 01-.117-.182c-.026-.061-.004-.11.065-.15.07-.04.195-.058.378-.058l.26.039c.174.034.389.138.645.312s.466.4.631.677c.2.356.44.627.723.814.282.186.566.28.853.28.286 0 .533-.022.742-.065a2.59 2.59 0 00.586-.196c.078-.582.29-1.028.638-1.34a8.92 8.92 0 01-1.335-.235 5.311 5.311 0 01-1.224-.508 3.505 3.505 0 01-1.048-.873c-.278-.347-.506-.803-.684-1.367-.177-.564-.266-1.215-.266-1.953 0-1.05.343-1.944 1.028-2.682-.321-.79-.29-1.675.091-2.656.252-.078.625-.02 1.12.176.495.195.857.362 1.087.5.23.14.415.257.554.352a9.245 9.245 0 012.5-.338c.859 0 1.693.113 2.5.338l.495-.312a7.01 7.01 0 011.197-.573c.46-.173.812-.221 1.055-.143.39.98.426 1.866.104 2.656.686.738 1.03 1.632 1.03 2.682 0 .738-.09 1.391-.268 1.96-.178.569-.407 1.024-.69 1.367a3.642 3.642 0 01-1.054.866c-.421.234-.83.403-1.224.508-.396.104-.84.182-1.335.234.451.39.677 1.007.677 1.85v2.746c0 .156.054.287.163.39.108.105.28.135.514.092 2.014-.669 3.657-1.873 4.928-3.613 1.272-1.74 1.908-3.7 1.908-5.88 0-1.813-.448-3.486-1.342-5.018z" fill="#47535E" />
                            </svg>
                        </a>
                        <a className={ProjectStyles.link} href="https://react-pdp-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)" fill="#47535E">
                                <path d="M19.076.222H13.22a.924.924 0 100 1.848h3.625l-8.86 8.86a.924.924 0 001.307 1.306l8.86-8.86v3.626a.924.924 0 101.848 0V1.146a.925.925 0 00-.924-.924z" />
                                <path d="M15.296 7.925a.924.924 0 00-.924.924v9.081H1.848V5.406h9.627a.924.924 0 100-1.848H.924A.924.924 0 000 4.482v14.372a.924.924 0 00.924.924h14.372a.924.924 0 00.924-.924V8.85a.924.924 0 00-.924-.924z" />
                                </g>
                                <defs>
                                <clipPath id="clip0">
                                    <path fill="#fff" d="M0 0h20v20H0z" />
                                </clipPath>
                                </defs>
                            </svg>
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