import './App.css';
import React from 'react'
import Footer from './Components/Footer'
// import AboutMe from './Components/AboutMe'
import ProjectPage from './Components/ProjectPage'
import Header from './Components/Header'

function App() {
  return (
      <>
      <body className='p-3 mb-2 bg-dark text-white'>
      <Header />
      <br></br>
      {/* <AboutMe /> */}
      <ProjectPage />
      <Footer />
      </body>
      </>
  )
}

export default App;
