import React from 'react'
import Banner from './Banner'
import github from '../github.svg'

function Home() {
  return (
    <div>
        <Banner text="Welcome to MovieHunt"/>
        <div className="container p-0 pt-5">
          <div className="row justify-content-center">
            <div className="col-12">

              <h2><span className="about-underline">About MovieHunt</span></h2>
              
              <p className="mt-4">
                  MovieHunt is a Movie Browser created in React. <br></br>
                  I have implemented use of useState, useEffect, useParams, Link, Route, functional components and javascript concepts. <br></br>
                  The API I've used for fetching data is: <a className="api-link" href="https://developers.themoviedb.org/3/getting-started/introduction" target="/blank">The Movie Database API</a>
              </p>
              <p>Created Using:</p>
              <h6 className="tech">React.js</h6>
              <h6 className="tech">Html</h6>
              <h6 className="tech">Css</h6>
              <h6 className="tech">JavaScript</h6>
              <h6 className="tech">Bootstrap</h6>

            </div>
          </div>
        </div>
        <footer className="container-fluid footer-style">
          <div className="container d-flex justify-content-between align-middle">
              <span>© 2022 MovieHunt</span>
              <a href="https://github.com/Yagnik-Gohil/MovieHunt" target="/blank"><img className="github-icon" src={github} alt="github"/></a>
          </div>
        </footer>
    </div>
  )
}

export default Home