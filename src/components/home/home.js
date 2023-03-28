import { Link } from 'react-router-dom';
import img1 from './emblem.jpeg';
import "./home.css";
import React from 'react';
import "./home.css";
import {FaInstagram,FaFacebook } from 'react-icons/fa';
import img0 from './img0.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import img7 from './img7.jpg';
import { Carousel } from 'react-bootstrap';
import { Nav, Navbar} from 'react-bootstrap';

function Homme(){
  return(
    <div class="home">
        <div>
            
        <Navbar className="navb" expand="lg">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <a className="text-light" href="#">About</a>
          
          <a className="text-light" href="#">Contact-Us</a>
          <Link to="login" className='text-light' >Login</Link>
           
          
        </Nav>
       
       
      </Navbar.Collapse>
    </Navbar>
    </div>
        <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={img6}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={img7}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={img0}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>

        <div class="my-5 mx-5 row row-cols-1 row-cols-sm-1 row-cols-md-3  row-cols-xl-3  text-center gy-3 mcard">
            <div class="col">
                <div class="card vcard">
                   <h4 className="text-center pt-2">Online Registrations</h4>
                    <div className="card-body">
                        <img className="w-100" height="200px"src={img3}/>
                        
                        <p>
                           Online registrations like Vehicle registration can be made here.
                        </p>
                        <Link to="register" className='btn btn-primary' >Register</Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card  vcard">
                <h4 className="text-center pt-2">Digital Payments and scholarships</h4>
                    <div className="card-body">
                        <img className="w-100" height="200px" src={img4}/>
                        
                        <p>
                           Digital payments like power bills and government scholarships can be applied. 
                        </p>
                        <Link to="payment" className='btn btn-primary' >Pay or Apply</Link>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card vcard">
                <h4 className="text-center pt-2">Complaints and grievances</h4>
                    <div className="card-body">
                        <img className="w-100" height="200px" src={img5}/>
                        
                        <p>
                            All the Complaints and grievances can be addressed here.
                        </p>
                        <Link to="grievance" className='btn btn-primary' >Fill a form</Link>
                    </div>
                </div>
            </div>

        </div>
    
    
    <div>
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
    </div>

    

  );

}

export default Homme;


