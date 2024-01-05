import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <Navbar className="bg-secondary">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://i.postimg.cc/xd92Dt04/playback-icon-7119874-1280.png"
                width="40"
                height="35"
                className="d-inline-block align-top"
              />{' '}
              <b style={{ textShadow:'-1px 0 coral, 0 1px coral, 1px 0 black, 0 -1px coral'}}><span>V</span>ideo <span>U</span>ploader</b>
            </Navbar.Brand>
          </Link>

          <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav ms-auto">
          <Link to={'/'} style={{textDecoration:"none"}}>
            <li class="nav-item me-5" style={{ textShadow:'-1px 0 coral, 0 1px coral, 1px 0 black, 0 -1px coral'}}>
              <a class="nav-link active" href="#"><i class="fa-solid fa-home me-lg-1 me-sm-0"></i> Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
          </Link>
          <Link to={'/home'} style={{textDecoration:"none"}}>
            <li class="nav-item me-5" style={{ textShadow:'-1px 0 coral, 0 1px coral, 1px 0 black, 0 -1px coral'}} >
              <a class="nav-link active" href="#"><i class="fa-solid fa-upload me-lg-1 me-sm-0"></i>Upload</a>
            </li>
          </Link>

          <Link to={'/watch-history'} style={{textDecoration:"none"}}>
            <li class="nav-item" style={{ textShadow:'-1px 0 coral, 0 1px coral, 1px 0 black, 0 -1px coral'}}>
              <a class="nav-link active" href="#"><i class="fa-solid fa-clock me-lg-1 me-sm-0"></i>History</a>
            </li>
          </Link>
          
         
        </ul>
        
      </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header