import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <>    

<footer className="footer">
  <div className="footer__addr">
    <h1 className="footer__logo">About Us</h1>  
  <ul className="nav__ul">
   <li> <a href="#"> Our Company</a></li>
   <li> <a href="#"> Our Coffee</a></li>
   <li> <a href="#">Stories and News</a></li>
   <li> <a href="#"> Starbucks Archive</a></li>
   <li>  <a href="#">Investor Relations</a></li>
   <li> <a href="#"> Customer Service</a></li>
  </ul>      
   
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Careers</h2>

      <ul className="nav__ul">
       
        <li>
          <a href="#">Culture and Values</a>
        </li>
        
        <li>
          <a href="#">Inclusion, Diversity, and Equity</a>
        </li>
        
        <li>
          <a href="#">College Achievement Plan
        </a>
        </li>
        
        <li>
          <a href="#">Alumni Community
</a>
        </li>
        
        <li>
          <a href="#">U.S. Careers
</a>
        </li>
        
        <li>
          <a href="#">International Careers
</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item nav__item--extra">
      <h2 className="nav__title">Social Impact</h2>
      
      <ul className="nav__ul">
        <li>
          <a href="#">People</a>
        </li>
        
        <li>
          <a href="#">Planet</a>
        </li>
        
        <li>
          <a href="#">Environmental and Social Impact Reporting
        </a>
        </li>   
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Order and Pickup</h2>
      
      <ul className="nav__ul">
      <li>
          <a href="#">Order on the App</a>
        </li>
        <li>
          <a href="#">Order on the Web</a>
        </li>
        
        <li>
          <a href="#">Delivery</a>
        </li>  
          <li>
          <a href="#">Order and Pickup Options</a>
        </li>

        <li>
          <a href="#">Explore and Find Coffee for Home</a>
        </li>
      </ul>
    </li>
  </ul>

  <hr/><br/>
  <footer class="footer-distributed">


<div class="footer-icons">

    <a href="#"><i class="fa fa-facebook"></i></a>
    <a href="#"><i class="fa fa-twitter"></i></a>
    <a href="#"><i class="fa fa-linkedin"></i></a>
    <a href="#"><i class="fa fa-github"></i></a>

</div>

<p class="footer-links">
    <a href="#">Privacy Policy
</a>
    |
    <a href="#">Terms of Use
</a>
    |
    <a href="#">CA Supply Chain Act
</a>
    |
    <a href="#">Cookie Preferences
</a>
   
</p>

</footer>

  <div className="legal">
    
    <p>&copy; 2022 Starbucks Coffee Company. All rights reserved.</p>
    
  </div>
</footer>
        </>
      );
}

export default Footer;