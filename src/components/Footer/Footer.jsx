import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div>
            <h1>Jobs Hunter</h1>
            <p>
              There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <p>
              <a href="">About Us</a>
            </p>
            <p>
              <a href="">Work</a>
            </p>
            <p>
              <a href="">Latest News</a>
            </p>
            <p>
              <a href="">Careers</a>
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <p>
              <a href="">Prototype</a>
            </p>
            <p>
              <a href="">Plans & Pricing</a>
            </p>
            <p>
              <a href="">Customers</a>
            </p>
            <p>
              <a href="">Integrations</a>
            </p>
          </div>
          <div>
            <h4>Support</h4>
            <p>
              <a href="">Help Desk</a>
            </p>
            <p>
              <a href="">Sales</a>
            </p>
            <p>
              <a href="">Become a Partner</a>
            </p>
            <p>
              <a href="">Developers</a>
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+1 777 - 978 - 5570</p>
            <p>524 Broadway , NYC</p>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p>@2023 JobsHunter. All Rights Reserved</p>
          <p>Powered by JobsHunter</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
