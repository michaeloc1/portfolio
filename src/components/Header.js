import React from 'react';
//import {Helmet} from "react-helmet";





function Header({ currentPage, handlePageChange }){
   // console.log(handlePageChange)
    return(
      <>

<nav className="navbar navbar-expand-lg bg-dark nav-custom">
  <div className="container-fluid">
    <div><h1>Michael O'Cone</h1></div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <a
                
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >   About Me
            </a>
        </li>
        <li className="nav-item">
            <a
                className="nav-link"
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                >
                Portfolio
                </a>
        </li>
        <li className="nav-item">
            <a
                className="nav-link"
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                >
                Contact
                </a>
        </li>
        <li className='nav-item'>        
          <a className="nav-link"
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        >
          Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
    )
}

export default Header;