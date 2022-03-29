import React from "react"

function Footer() {
  return <div className='footer-container'>

      <div className="footer-items content-base">

        <div className="footer-text">
          contact@homeid.com
        </div>

         <div className="footer-text">
          www.homeid.com
        </div>
        <div className="footer-bellow">
          <div className="footer-bellow-content">
            Terms of Use
          </div>
           <div className="footer-bellow-content">
              Privacy Policy
          </div>
        </div>
      </div>

       <div className="footer-items content-base">
          <div className="footer-text footer-title">Popular Searches</div>
           <div className="footer-text footer-links">Apartment for Rent</div>
           <div className="footer-text footer-links">Apartment Low to hide</div>
           <div className="footer-text footer-links">Offices for Buy</div>
           <div className="footer-text footer-links">Offices for Rent</div>
      </div>

       <div className="footer-items content-base">
           <div className="footer-text footer-title">Quick links</div>
            <div className="footer-links footer-text">Terms of Use</div>
            <div className="footer-text footer-links">Privacy Policy</div>
            <div className="footer-text footer-links">Contact Support</div>
            <div className="footer-text footer-links">Careers</div>
      </div>

        <div className="footer-items content-base">
            <div className="footer-text footer-title"> Sign Up for Our Newsletter</div>
            <div className="footer-text ">Lorem ipsum dolor sit amet, consecte tur cing elit.<br/>
                Suspe ndisse suscipit sagittis
            </div>
            <div className="footer-input">
                 <input className="footer-input-style" placeholder="Your email" type="text"/>
                <button className="footer-button-style">Subscribe</button>
                <div className="footer-bellow-content footer-icons">
                    <div className="footer-icon"><i className="fab fa-twitter"></i></div>
                    <div className="footer-icon"><i className="fab fa-facebook-f"></i></div>
                    <div className="footer-icon"><i className="fab fa-skype"></i></div>
                    <div className="footer-icon"><i className="fab fa-linkedin-in"></i></div>
                </div>
            </div>
      </div>



  </div>
}

export default Footer
