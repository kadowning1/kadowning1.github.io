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
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-F3LPJ96C63"></script>
                <script>
                    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-F3LPJ96C63');
`}
                </script>
                <script id="google-tag-manager" strategy="afterInteractive">
                    {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=GTM-PBLRN34'+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','');
      `}
                </script>
            </head>
            <body className='back text-white'>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBLRN34" height="0" width="0" style="display: none; visibility: hidden;" />`,
                    }}
                />
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
