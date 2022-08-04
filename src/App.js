import './App.css';
import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import AboutMe from './Pages/AboutMe';
import ProjectPage from './Pages/ProjectPage';

function App () {
    return (
        <>
            <head>
            </head>
            <body className='back text-white'>
                <div className="container back">
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="/aboutme">
                                <AboutMe />
                            </Route>
                            <Route path="/projects">
                                <ProjectPage />
                            </Route>
                            <Route path="/blog">
                                <Blog />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                        <Footer />
                    </BrowserRouter>
                </div>
            </body>
        </>
    )
}

export default App;
