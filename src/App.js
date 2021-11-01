import './App.css';
import React from 'react'
import Footer from './Components/Footer'
// import AboutMe from './Components/AboutMe'
import ProjectPage from './Pages/ProjectPage'
import Header from './Components/Header'
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Home from './Pages/Home'
import AboutMe from './Pages/ProjectPage';
import Blog from './Pages/Blog'

function App() {
  return (
    <>
      <body className='p-3 mb-2 bg-dark text-white'>
        <div className="text-center">
          <BrowserRouter>
            <Header
            />
            <Switch>
              <Route path="/projects">
                <ProjectPage />
              </Route>
              {/* <Route path="/blog">
                <Blog />
              </Route> */}
              <Route path="/aboutme">
                <AboutMe />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </div>
    );
      </body>
    </>
  )
}

export default App;
