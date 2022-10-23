import { useState } from "react";
import React from "react";
import "./join.css";

export default function SignInJoin() {
  return (
    <>
      <div className="joibss">
        <div style={{ textAlign: "center" }}>
          <h2>Sign in or create an account</h2>
         
        </div>
        <div className="join">
          <div className="center">
            <form>
              <p>* indicates required field</p>
              
              <div className="inputbox">
                <input type="text" required="required" />
                <span>Username</span>
              </div>
              
              <div className="inputbox">
                <input type="text" required="required" />
                <span>Password</span>
              </div>
              <div style={{ lineHeight: "3" }}>
              <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                /> <label for="vehicle1">
                {" "}
                Yes, I’d like email from Starbucks
              </label>I agree <br/>
                <h4 style={{ color: "#006241", textDecoration: "underline" }}>
                  Forgot your username?
                </h4>
                <h4 style={{ color: "#006241", textDecoration: "underline" }}>
                Forgot your password?
                </h4>
                 
               
              </div>
             
           
              <div className="inputbox">
                <input type="button" value="Sign In" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
