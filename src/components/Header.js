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
                href="#portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                >
                Portfolio
                </a>
        </li>
        <li className="nav-item">
            <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                Contact
                </a>
        </li>
        <li className='nav-item'>        
          <a 
        href="#resume"
        onClick={() => handlePageChange('Resume')}
        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
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