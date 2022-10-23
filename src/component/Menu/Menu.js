import React from "react";
import "./Menus.css";

export default function Menus() {
    const data = [
        { id: 1, name: "Hot Coffees" },
        { id: 2, name: "Hot Teas  " },
        { id: 3, name: "Hot Drinks" },
        { id: 4, name: "Hot Drinks" },
        { id: 4, name: "Hot Drinks" },
      ];
  return (
    <>
    <div className="Menus">
        <div className="container">
            <div className="row">
                <div className="col-Menus1">
                    <h2>Drinks</h2>
                    <p>Hot Teas</p>
                       <p> Hot Breakfast</p>
                       <p>Bakery</p>
                       <p>Lunch</p>
                       <p>Snacks & Sweets</p>
                       <p>Oatmeal & Yogurt
</p>
                   
                       <h2>At Home Coffee</h2>
                    <p>Whole Bean</p>
                       <p> VIA® Instant</p>

                       <h2>Merchandise</h2>
                    <p>Cold Cups</p>
                       <p>Tumblers</p>
                       <p>Mugs</p>
                       <p>Water Bottles</p>
                       <p>Other</p>
                      
                       <h2>Gift Cards</h2>
                    <p>Happy Birthday</p>
                       <p>Thank You</p>
                       <p>Traditional</p>
                      
                </div>
                <div className="col-Menus2">
       
        <div className="menuss">
            <div className="container">
            <h1 style={{padding :'30px 0px 30px 0px'}}> Menu</h1>
               
                <h2 style={{padding :'30px 0px 30px 0px'}}> Drinks</h2>
                <hr/>
                <div className="row">
                {data.map((name) => (
                    <div className="menu-col" >
                        <img src ="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" width={'100px'}/>
                        <p >{name.name}</p>
                    </div>
                    
                ))}
                </div>


                <h1 style={{padding :'30px 0px 30px 0px'}}> Foot</h1>
               
               <hr/>
               <div className="row">
               {data.map((name) => (
                   <div className="menu-col" >
                       <img src ="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" width={'100px'}/>
                       <p >{name.name}</p>
                   </div>
                   
               ))}
               </div>


               <h1 style={{padding :'30px 0px 30px 0px'}}> At Home Coffee</h1>
               
               
               <hr/>
               <div className="row">
               {data.map((name) => (
                   <div className="menu-col" >
                       <img src ="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" width={'100px'}/>
                       <p >{name.name}</p>
                   </div>
                   
               ))}
               </div>


            </div>
        </div>

        </div>
        </div>
    </div>
    </div>
    </>
  );
}
