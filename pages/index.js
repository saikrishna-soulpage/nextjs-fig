import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bella Olonje</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container-fluid">
        <Navbar bg="white" expand="xl">
          <Navbar.Brand href="#home">
            <img src="logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="nav" href="#home">
                <b className="b">Home</b>
              </Nav.Link>
              <Nav.Link className="nav" href="#product">
                <b className="b">Product</b>
              </Nav.Link>
              <Nav.Link className="nav" href="#faq">
                <b className="b">Faq</b>
              </Nav.Link>
              <Nav.Link className="nav" href="#contact">
                <b className="b">Contact</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="services">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h1">Food app</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h2">
                Why stay hungry when you can order form Bella Onojie
              </h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h3">Download the bella onoje’s food app now on</h1>
            </div>
            <div className="d-flex justify-content-center mt-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <button href="#home" className="b1">
                Playstore
              </button>
            </div>
            <div className="d-flex justify-content-center mt-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <button href="#home" className="b2">
                App store
              </button>
            </div>
            <div className="mt-5 col-lg-5 col-md-8 col-sm-10 col-xs-12">
              <img src="/i1.svg" className="i1" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="s"></div>
        <hr className="hr" />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="h2">How the app works</h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="ch1">Create an account</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h2">
                Create/login to an existing account to get started
              </h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h1">
                An account is created with your email and a desired password
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="/im1.svg" className="im1" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="s1"></div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="h2">{""}</h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="ch1">Explore varieties</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h2">Shop for your favorites meal as e dey hot.</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h1">
                Shop for your favorite meals or drinks and enjoy while doing it.
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="/im2.svg" className="im1" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="s1"></div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="h2">{""}</h1>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="ch1">Checkout</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h2">
                When you done check out and get it delivered.
              </h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h1">
                When you done check out and get it delivered with ease.
              </h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="/im3.svg" className="im1" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="s1"></div>
      </div>

      <div className="container-fluid">
        <div className="services1">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="m">{""}</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h2">Download the app now.</h1>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h1 className="h3">
                Available on your favorite store. Start your premium experience
                now
              </h1>
            </div>
            <div className="d-flex justify-content-center mt-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <button href="#home" className="b1">
                Playstore
              </button>
            </div>
            <div className="d-flex justify-content-center mt-5 col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <button href="#home" className="b2">
                App store
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="logo">
              <img src="/logo.svg" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="d-flex justify-content-center">
              <div className="social">
                <img src="/img.svg" />
              </div>
              <div className="social">
                <img src="/img1.svg" />
              </div>
              <div className="social">
                <img src="/img2.svg" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h6 className="copyright">Copyright 2020 Bella Onojie.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="h2">How the app works</h1>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="ch1">Create an account</h1>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="h2">
              Create/login to an existing account to get started
            </h1>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 className="h1">
              An account is created with your email and a desired password
            </h1>
          </div>
          <div className="mt-5 col-lg-5 col-md-8 col-sm-10 col-xs-12">
            <img src="/im1.svg" className="im1" />
          </div>
        </div>
      </div> */
}
