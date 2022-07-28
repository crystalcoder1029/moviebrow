import React from 'react'
import { useNavigate , Link } from 'react-router-dom'
import logo from '../logo.svg'

function Navbar({searchText, setSearchText}) {

  const navigate = useNavigate ()

  const updateSearchText = (e) => {
    navigate("/search")
    setSearchText(e.target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-style p-2">
        <div className="container p-0">
            <div className="d-flex brand-parent-div nav-item">
              <img src={logo} class="navbar-logo"/>
              <h1 className="brand-name"><Link className="navbar-brand" to="/">MovieHunt</Link></h1>
            </div>
            <form className="d-flex nav-item">
                <input className="form-control me-2 search-bar" onChange={updateSearchText} value={searchText} type="search" placeholder="Search Movie" aria-label="Search"/>
                <button className="search-btn" type="submit">Search</button>
            </form>
            
        </div>
    </nav>
  )
}

export default Navbar