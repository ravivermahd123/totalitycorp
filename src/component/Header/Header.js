

import { useState } from "react"
import React from 'react';
import './header.css';
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
<> <div className="header">
      <h2 className="logo"><Link to ='/' ><img src = "https://freepngimg.com/download/starbucks/24384-3-starbucks-logo-file.png" width={'70px'} /></Link></h2>
      <input type="checkbox" id="chk" />
      <ul className="menus">

        <a ><Link to ='/Menu' >Menu</Link></a>
        <a ><Link to ='/Reward' >REWARDS</Link></a>
        <a href="/"><Link to ='/GiftCard' >GIFT CARDS </Link></a>
      </ul>   
      <label htmlFor="chk" className="show-menu-btn">
        <i className="fas fa-bars" />
      </label>
    
      <ul className="menu">
     
      <a className="hide-Menu" ><Link to ='/Menu' >Menu</Link></a>
        <a ><Link to ='/Reward' className="hide-Menu" >REWARDS</Link></a>
        <a href="/" className="hide-Menu"><Link to ='/GiftCard' >GIFT CARDS </Link></a>
     
        <a href="/"><img src ="https://cdns.iconmonstr.com/wp-content/releases/preview/2013/240/iconmonstr-location-1.png" width={'20px'}/><Link to ='/Map' > Find a store</Link></a>
        <button class="button-21" role="button"><Link to ='/SignIn' > Sign in</Link></button> &nbsp;&nbsp;
        <button class="button-22" role="button"><Link to ='/Join' style ={{color:'white'}}>Join now</Link></button>

       

        
      
        
        <label htmlFor="chk" className="hide-menu-btn">
          <i className="fas fa-times" />
        </label>
        
      </ul>   
    </div>
</>
  );
}