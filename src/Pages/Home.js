import React from 'react';
import AboutMe from '../Pages/AboutMe';
import ProjectPage from '../Components/ProjectPage';
import Splash from '../Components/Splash';
import Blog from './Blog';




export default function Home() {

    return (
        <>
            <Splash />
            <AboutMe />
            <ProjectPage />
            <Blog />
        </>
    )
}