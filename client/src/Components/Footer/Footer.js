import React  from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
        <>
         {/* <!-- ======= Footer ======= --> */}
  <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <i className="bi bi-geo-alt icon"></i>
          <div>
            <h4>Address</h4>
            <p>
              A108 Adam Street <br />
              New York, NY 535022 - US<br />
            </p>
          </div>

        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-telephone icon"></i>
          <div>
            <h4>Reservations</h4>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links d-flex">
          <i className="bi bi-clock icon"></i>
          <div>
            <h4>Opening Hours</h4>
            <p>
              <strong>Mon-Sat: 11AM</strong> - 23PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Follow Us</h4>
          <div className="social-links d-flex">
            <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
            <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
            <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
            <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
          </div>
        </div>

      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Yummy</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/NavLinkJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ --> */}
        Designed by <NavLink to="https://bootstrapmade.com/">BootstrapMade</NavLink>
      </div>
    </div>

  </footer>
  {/* <!-- End Footer -->
  <!-- End Footer --> */}
  
        </>
    )
}
 export default Footer;