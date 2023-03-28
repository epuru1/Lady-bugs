import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "../navbar/navbar";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import g1 from "./g1.jpg"
import g2 from "./g2.jpg"
import g3 from "./g3.jpg"
import { Carousel } from 'react-bootstrap';
import {FaInstagram,FaFacebook } from 'react-icons/fa';

import "./grievance.css";
function Grievance(props) {
  const [value, setValue] = React.useState(0);
  return (
    <div>
        <Navbar/>

        <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={g1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={g2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel"
          src={g3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </div>
      <div class="container my-5 mx-5 justify-content-center  row row-cols-2  row-cols-sm-2 row-cols-md-2  row-cols-xl-2  text-center gy-2  ">
        <div class="col  ">
          <div class="card  vcard ">
            <h1 class="text-dark bg-dark bg-opacity-25">Complaints</h1>
            <div class="card-body">
              <p>
                <ul>
                  <li>What's the complaint about? </li>
                  <input type="radio" />
                  <label>Registration and licensing</label>

                  <input type="radio" />
                  <label>payements</label>
                  <li>What was happened</li>
                  <input type="text" />
                  <li>How can we make things right?</li>
                  <input type="text" />
                </ul>
                <div className="text-center mt-4 ">
                  <button type="submit" className="btn btn-primary mt-3">
                    Send
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card  vcard">
            <h1 class="text-dark bg-dark bg-opacity-25">Feedback</h1>
            <div class="card-body">
              <p>
                <div>
                  <Box
                    align="center"
                    component="fieldset"
                    mb={3}
                    borderColor="transparent"
                  >
                    <Rating
                      value={value}
                      name="rating"
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      onClick={props.handleInputChange}
                    />
                  </Box>
                </div>
              </p>
              <p>
                <ul>
                  <li>How Satisfied are you with our website?</li>
                  <input type="radio" />
                  <label>Excellent</label> <input type="radio" />
                  <label>Good</label> <input type="radio" />
                  <label>Bad</label> <input type="radio" />
                  <label>Poor</label>
                  <li>What would we improve?</li>
                  <input class="form-control input-lg" type="text" />
                </ul>
              </p>
              <button class="btn btn-primary click ">Click</button>
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
export default Grievance;