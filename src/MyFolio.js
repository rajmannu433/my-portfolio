import React, { Component } from 'react';
import MyNavbar from './MyNavbar';
import Example from './Example';
import {
  bounce,
  rotateIn,
  tada,
  zoomIn,
  jello,
  bounceOut,
} from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce'),
  },
  rotateIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(rotateIn, 'rotateIn'),
  },
  tada: {
    animation: 'x 1s',
    animationName: Radium.keyframes(tada, 'tada'),
  },
  zoomIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(zoomIn, 'zoomIn'),
  },
  jello: {
    animation: 'x 1s',
    animationName: Radium.keyframes(jello, 'jello'),
  },
  bounceOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceOut, 'bounceOut'),
  },
};

class MyFolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [
        'SOFTWARE ENGINEER',
        'CODER',
        'PROGRAMMER',
        'DEVELOPER',
        'DESIGNER',
      ],
      i: 0,
      showMobileNav: false,
    };
  }

  render() {
    return (
      <div>
        <div>
          <body>
            {/* <!-- ======= Mobile nav toggle button ======= --> */}
            <header id="header">
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
            </header>
            {/* <!-- End Header --> */}
            {/* <!-- ======= Hero Section ======= --> */}
            <MyNavbar />
            <section
              id="hero"
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <div class="hero-container" data-aos="fade-in">
                <StyleRoot>
                  <div className="test" style={styles.bounce}>
                    <h1>Abhishek Raj </h1>

                    <h3>I'm a</h3>
                  </div>
                </StyleRoot>
                <div>
                  <h3>
                    <Example />
                  </h3>
                </div>
              </div>
            </section>
            {/* <!-- End Hero --> */}
            <main id="main">
              {/* <!-- ======= About Section ======= -->/ */}
              <section id="about" class="about">
                <div class="container">
                  <div class="section-title">
                    <h2>About</h2>

                    <p>
                      I'm a software engineer gratudated from BIT Mesra Ranchi.
                      I am currently working in Ab In-Bev(World's largest
                      brewer). I am a technology enthusiast and i'm always eager
                      to learn new technologies. I love gadgets and shoes.
                    </p>
                  </div>

                  <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                      <img
                        src="assets/img/profile-img.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div
                      class="col-lg-8 pt-4 pt-lg-0 content"
                      data-aos="fade-left"
                    >
                      <h3>UI/UX Designer &amp; Web Developer.</h3>
                      <h3>Data Science &amp; Machine Learning Expert.</h3>
                      <p class="fst-italic">More details about me</p>
                      <div class="row">
                        <div class="col-lg-6">
                          <ul>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Birthday:</strong>{' '}
                              <span>06 Oct 1997</span>
                            </li>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Website:</strong>{' '}
                              <span>
                                <a href="https://rajmannu433.github.io/my-portfolio">
                                  WEBSITE
                                </a>
                              </span>
                            </li>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Phone:</strong> <span>9829617811</span>
                            </li>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>City:</strong>{' '}
                              <span>Hazaribag, India</span>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-6">
                          <ul>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Age:</strong> <span>23</span>
                            </li>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Degree:</strong> <span>B.tech</span>
                            </li>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Email:</strong>{' '}
                              <span>rajmannu433@gmail.com</span>
                            </li>
                            <li>
                              <i class="bi bi-chevron-right"></i>{' '}
                              <strong>Freelance:</strong> <span>Available</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p>Contact to know more.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- End About Section --> */}

              {/* <!-- ======= Facts Section ======= --> */}
              {/* <section id="facts" class="facts"> */}
              {/* <div class="container">
              <div class="section-title">
                <h2>Facts</h2>
                <p>
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </p>
              </div>

              <div class="row no-gutters">
                <div
                  class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                >
                  <div class="count-box">
                    <i class="bi bi-emoji-smile"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Happy Clients</strong> consequuntur quae
                    </p>
                  </div>
                </div>

                <div
                  class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div class="count-box">
                    <i class="bi bi-journal-richtext"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Projects</strong> adipisci atque cum quia aut
                    </p>
                  </div>
                </div>

                <div
                  class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="count-box">
                    <i class="bi bi-headset"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1453"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Hours Of Support</strong> aut commodi quaerat
                    </p>
                  </div>
                </div>

                <div
                  class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div class="count-box">
                    <i class="bi bi-people"></i>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="32"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Hard Workers</strong> rerum asperiores dolor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
              {/* <!-- End Facts Section --> */}

              {/* <!-- ======= Skills Section ======= --> */}
              <section id="skills" class="skills section-bg">
                <div class="container">
                  <div class="section-title">
                    <h2>Skills</h2>
                    <p>
                      I take up new courses and learn as much as i can.
                      Following are a few things that i have learned.
                    </p>
                  </div>

                  <div class="row skills-content">
                    <div class="col-lg-6" data-aos="fade-up">
                      <div class="progress">
                        <span class="skill">
                          HTML <i class="val">100%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '100%' }}
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          CSS <i class="val">90%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          JavaScript <i class="val">80%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '80%' }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          React <i class="val">95%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '95%' }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          Backend <i class="val">95%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '95%' }}
                            aria-valuenow="95"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="col-lg-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div class="progress">
                        <span class="skill">
                          Data Science <i class="val">90%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          Machine Learning <i class="val">90%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          Photoshop <i class="val">55%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '55%' }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>

                      <div class="progress">
                        <span class="skill">
                          PWA <i class="val">90%</i>
                        </span>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{ width: '90%' }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- End Skills Section --> */}

              {/* <!-- ======= Resume Section ======= --> */}
              <section id="resume" class="resume">
                <div class="container">
                  <div class="section-title">
                    <h2>Resume</h2>
                    <p>You can catch up with me on my journey here</p>
                  </div>

                  <div class="row">
                    <div class="col-lg-6" data-aos="fade-up">
                      <h3 class="resume-title">Summary</h3>
                      <div class="resume-item pb-0">
                        <h4>Abhishek Raj</h4>
                        <p>
                          <em>
                            Innovative and Creative Full-Stack web developer.A
                            data science and machine learning enthusiast. Enjoy
                            to learn and explore and create new technologies
                          </em>
                        </p>
                        <ul></ul>
                      </div>

                      <h3 class="resume-title">Education</h3>
                      <div class="resume-item">
                        <h4>BIT Mesra</h4>
                        <h5>2017 - 2021</h5>
                        <p>
                          <em>Birla Institute of Technology, Mesra Ranchi</em>
                        </p>
                        <p>Pursued my B.Tech in Information Technology</p>
                      </div>
                      <div class="resume-item">
                        <h4>Class 11-12</h4>
                        <h5>2014 - 2016</h5>
                        <p>
                          <em>Jawahar Vidya Mandir, Shyamali Ranchi</em>
                        </p>
                        <p></p>
                      </div>
                      <div class="resume-item">
                        <h4>Class Prep-10</h4>
                        <h5>2003 - 2014</h5>
                        <p>
                          <em>St. Xaviers School Hazaribag</em>
                        </p>
                        <p></p>
                      </div>
                    </div>
                    <div
                      class="col-lg-6"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <h3 class="resume-title">Professional Experience</h3>
                      <div class="resume-item">
                        <h4>Automation Intern</h4>
                        <h5>2021 - Present</h5>
                        <p>
                          <em>Ab In-Bev </em>
                        </p>
                        <ul>
                          <li>
                            Intern int he GCC India of the company Ab Inbev
                          </li>
                          <li>I work at the GEL tower of the company</li>
                          <li>
                            Developed a number of portal like CQ portal and MDM
                            Portal for the team
                          </li>
                          <li>From Jan - july 2021</li>
                        </ul>
                      </div>
                      {/* <div class="resume-item">
                        <h4>Graphic design specialist</h4>
                        <h5>2017 - 2018</h5>
                        <p>
                          <em>Stepping Stone Advertising, New York, NY</em>
                        </p>
                        <ul>
                          <li>
                            Developed numerous marketing programs (logos,
                            brochures,infographics, presentations, and
                            advertisements).
                          </li>
                          <li>
                            Managed up to 5 projects or tasks at a given time
                            while under pressure
                          </li>
                          <li>
                            Recommended and consulted with clients on the most
                            appropriate graphic design
                          </li>
                          <li>
                            Created 4+ design presentations and proposals a
                            month for clients and account managers
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                </div>
              </section>
              {/* <!-- End Resume Section --> */}

              {/* <!-- ======= Portfolio Section ======= --> */}
              <section id="portfolio" class="portfolio section-bg">
                <div class="container">
                  <div class="section-title">
                    <h2>Portfolio</h2>
                    <p>Few of the many Projects i have worked on here are</p>
                  </div>

                  <div class="row" data-aos="fade-up">
                    <div class="col-lg-12 d-flex justify-content-center">
                      <ul id="portfolio-flters">
                        <li data-filter="*" class="filter-active">
                          All
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    class="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                      <div class="portfolio-wrap">
                        <img
                          src="assets/img/portfolio/portfolio-1.jpg"
                          class="img-fluid"
                          alt=""
                        />
                        <div class="portfolio-links">
                          {/* <a
                        // href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 1"
                      > */}
                          <h5>Facial Emotion Recognition</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                      <div class="portfolio-wrap">
                        <img
                          src="assets/img/portfolio/portfolio-2.jpg"
                          class="img-fluid"
                          alt=""
                        />
                        <div class="portfolio-links">
                          <h5>InstaBOT</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                      <div class="portfolio-wrap">
                        <img
                          src="assets/img/portfolio/portfolio-3.jpg"
                          class="img-fluid"
                          alt=""
                        />
                        <div class="portfolio-links">
                          <h5>Codeial</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                      <div class="portfolio-wrap">
                        <img
                          src="assets/img/portfolio/portfolio-4.jpg"
                          class="img-fluid"
                          alt=""
                        />
                        <div class="portfolio-links">
                          <h5>Stock Price Prediction</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                      <div class="portfolio-wrap">
                        <img
                          src="assets/img/portfolio/portfolio-5.jpg"
                          class="img-fluid"
                          alt=""
                        />
                        <div class="portfolio-links">
                          <h5>Zomato API</h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                      <div class="portfolio-wrap">
                        <img
                          src="assets/img/portfolio/portfolio-6.jpg"
                          class="img-fluid"
                          alt=""
                        />
                        <div class="portfolio-links">
                          <h5>Case Study on Startups</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* <!-- ======= Contact Section ======= --> */}
              <section id="contact" class="contact">
                <div class="container">
                  <div class="section-title">
                    <h2>Contact</h2>
                    <p>Just feel free to contact.</p>
                  </div>

                  <div class="row" data-aos="fade-in">
                    <div class="col-lg-5 d-flex align-items-stretch">
                      <div class="info">
                        <div class="address">
                          <i class="bi bi-geo-alt"></i>
                          <h4>Location:</h4>
                          <p>
                            64/A Shyam Bhawan Mangal Bazar Hazaribag Jharkhand,
                            825301
                          </p>
                        </div>

                        <div class="email">
                          <i class="bi bi-envelope"></i>
                          <h4>Email:</h4>
                          <p>rajmannu433@gmail.com</p>
                        </div>

                        <div class="phone">
                          <i class="bi bi-phone"></i>
                          <h4>Call:</h4>
                          <p>9829617811</p>
                        </div>

                        {/* <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                      frameborder="0"
                      style="border:0; width: 100%; height: 290px;"
                      allowfullscreen
                    ></iframe> */}
                      </div>
                    </div>
                  </div>
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
              </section>
              {/* <!-- End Contact Section --> */}
            </main>
            {/* <!-- End #main --> */}
            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">
              <div class="container">
                {/* <div class="copyright">
              &copy; Copyright{' '}
              <strong>
                <span>iPortfolio</span>
              </strong>
            </div> */}
              </div>
            </footer>
            {/* <a
        //   href="#"
          class="back-to-top d-flex align-items-center justify-content-center"
        > */}
            <i class="bi bi-arrow-up-short"></i>
            {/* </a> */}
          </body>
        </div>
      </div>
    );
  }
}

export default MyFolio;
