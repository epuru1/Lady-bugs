import React from 'react';
import './footer.css'
function Footer() {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2023 My Website</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ol className="list-unstyled">
              <li><a href="#">Another Example Government Website</a></li>
              <li><a href="#">Another Example Government Website</a></li>
              <li><a href="#">Another Example Government Website</a></li>
            </ol>
            </div>
            <div className="col-md-6">
            <ol className="list-unstyled">
              <li><a href="#">Another Example Government Website</a></li>
              <li><a href="#">Another Example Government Website</a></li>
              <li><a href="#">Another Example Government Website</a></li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;