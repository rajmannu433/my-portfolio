import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MyNavbar extends Component {
  render() {
    return (
      <div id="extra-navbar">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">My Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <div class="d-flex flex-column">
                <div class="profile">
                  <img
                    src="assets/img/profile-img.jpg"
                    alt=""
                    class="img-fluid rounded-circle"
                  />
                  <h1 class="text-light">
                    <a href="#hero">Abhishek Raj</a>
                  </h1>

                  <div class="social-links mt-3 text-center">
                    <a
                      href="https://twitter.com/Abhishe69290438"
                      class="twitter"
                    >
                      <i class="bx bxl-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/abhishek.raj.5811/"
                      class="facebook"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/abhishek_mannu/"
                      class="instagram"
                    >
                      <i class="bx bxl-instagram"></i>
                    </a>

                    <a href="https://github.com/rajmannu433" class="github">
                      <i class="bx bxl-github"></i>
                    </a>
                  </div>
                </div>

                <nav id="navbar" class="nav-menu navbar">
                  <ul>
                    <li>
                      <a href="#hero" class="nav-link scrollto ">
                        <i class="bx bx-home"></i> <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#about" class="nav-link scrollto">
                        <i class="bx bx-user"></i> <span>About</span>
                      </a>
                    </li>
                    <li>
                      <a href="#resume" class="nav-link scrollto">
                        <i class="bx bx-file-blank"></i> <span>Resume</span>
                      </a>
                    </li>
                    <li>
                      <a href="#portfolio" class="nav-link scrollto">
                        <i class="bx bx-book-content"></i>{' '}
                        <span>Portfolio</span>
                      </a>
                    </li>

                    <li>
                      <a href="#contact" class="nav-link scrollto">
                        <i class="bx bx-envelope"></i> <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
