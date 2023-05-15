import React from 'react';

function Header({ currentPage, handlePageChange }){
    console.log(handlePageChange)
    return(
<nav className="navbar navbar-expand-lg bg-light nav-custom">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button clclassNameass="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            <a
                className="nav-link active"
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
    )
}

export default Header;