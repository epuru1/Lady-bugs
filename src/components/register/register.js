import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css"
import Navbar from "../navbar/navbar";
import { Carousel } from 'react-bootstrap';
import r1 from './register5.jpg';
import r2 from './register4.jpg';
import r3 from './register2.jpg';
import {FaInstagram,FaFacebook } from 'react-icons/fa';
function Register() {
  return (
    <div>
        <Navbar/>
        <div className="registercarousel">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={r1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={r2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={r3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
       
        <div className="container my-5 mx-5 justify-content-center  row row-cols-1  row-cols-sm-2 row-cols-md-2  row-cols-xl-2  text-center gy-2  ">
            <div className="col">
                <div className="card  vcard">
                    <h2 className="text-dark bg-primary bg-opacity-25">Registration</h2>
                    <div className="card-body">
                        <p>
                        <ol>
                            <li><a  classname = 'text-dark'href="#">Environmental Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Autonomous Vehicle Register</a></li>
                            <li><a  classname = 'text-primary'href="#">Voter Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Tax Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Passport Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Mental Health Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Business Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Social Welfare Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">Vaccine Registration</a></li>
                            <li><a  classname = 'text-primary'href="#">User Account Registration</a></li>
                        </ol>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card  vcard">
                    <h2 className="text-dark bg-primary bg-opacity-25">License</h2>
                    <div className="card-body">
                    <p>
                        <ol>
                            <li><a  classname = 'text-dark'href="#">Autonomous Vehicle Licensing</a></li>
                            <li><a  classname = 'text-primary'href="#">Medical Licensing</a></li>
                            <li><a  classname = 'text-primary'href="#">Company Licensing </a></li>
                            <li><a  classname = 'text-primary'href="#">Digital Identity Licensing</a></li>
                            <li><a  classname = 'text-primary'href="#">Mental Health Licensing</a></li>
                            <li><a  classname = 'text-primary'href="#">Social media Licensing</a></li>
                            <li><a  classname = 'text-primary'href="#">Sustainability Licensing</a></li>
                            <li><a  classname = 'text-primary'href="#">Pharmaceutical Licensing </a></li>
                            <li><a  classname = 'text-primary'href="#">FSSAI</a></li>
                            <li><a  classname = 'text-primary'href="#">Business Licensing</a></li>
                        </ol>
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <footer className="footer">
      <div>
        <p>Email: vnr2025@gmail.com</p>
        <p>Phone: 555-555-5555</p>
        <div className="social-icons">
          
        
          <a href="https://instagram.com"><FaInstagram /></a>
          <a href="https://facebook.com"><FaFacebook /></a>
        </div>
      </div>
    </footer>

    </div>
  );
}
export default Register;