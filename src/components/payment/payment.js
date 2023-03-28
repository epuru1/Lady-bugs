import React from 'react';
import "./payment.css";
import Navbar from "../navbar/navbar";
import d1 from "./digital1.jpg"
import d2 from "./digital2.jpeg"
import d3 from "./digital3.jpeg"
import d4 from "./digital4.jpeg"
import d5 from "./digital5.jpeg"
import d6 from "./digital6.jpeg"
import { Carousel } from 'react-bootstrap';
import {FaInstagram,FaFacebook } from 'react-icons/fa';

import Footer from '../footer/footer';




function Payment() {
  return (
    <div>
        <Navbar/>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={d2}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={d1}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={d3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    <div class="container my-5 mx-5 row row-cols-1 row-cols-sm-1 row-cols-md-3  row-cols-xl-3  text-center gy-3 payment  ">
            <div className="col">
                <div className="card vcard">
                   <h3 className="text-center pt-2">Digital Payment</h3>
                    <div className="card-body">
                        <img className="w-100" height="200px"  src={d1}/>
                        
                        <p>
                        Electronic platform for online transactions using digital payment methods.
                        </p>
                        <button class="btn btn-primary click">Click</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card  vcard">
                <h3 className="text-center pt-2">Scholarships</h3>
                    <div className="card-body">
                        <img className="w-100" height="200px" src={d2}/>
                        
                        <p>
                        Digital payment service for providing financial support or assistance.
                        </p>
                        <button className="btn btn-primary click">Click</button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card  vcard">
                <h3 className="text-center pt-2">Schemes</h3>
                    <div className="card-body">
                        <img className="w-100" height="200px" src={d3}/>
                        
                        <p>
                        Digital payment service to facilitate government schemes or programs
                        </p>
                        <button className="btn btn-primary click">Click</button>
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

export default Payment;