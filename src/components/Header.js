import React from 'react';
import {Helmet} from "react-helmet";





function Header({ currentPage, handlePageChange }){
    console.log(handlePageChange)
    return(
      <>
 <Helmet>
  <title>My Portfolio</title>
<script src="https://kit.fontawesome.com/dcec982f57.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rowdies"></link>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous"></script>

</Helmet>
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
                className="nav-link"
                aria-current="page"
                href="#about"
                onClick={() => handlePageChange('About')}
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