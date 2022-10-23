
import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GiftCard from './Link/GiftCard';
import Home from './Link/Home';
import Join from './Link/Join';
import Map from './Link/Map';
import Menu from './Link/Menu';
import Reward from './Link/Reward';
import SignIn from './Link/SignIn';


export default function RoutesFolder() {
  return (
          
            <Routes>
            
               <Route exact path='/' element={<Home/>} />
                <Route path="/Menu" element={<Menu/>} />
                <Route path="/Reward" element={<Reward/>} />
                <Route path="/GiftCard" element={<GiftCard/>} />

                <Route path="/Map" element={<Map/>} />

                <Route path="/Join" element={<Join/>} />
                <Route path="/SignIn" element={<SignIn/>} />
 
            </Routes>
        
  )
}
