import { useState } from "react";
import React from "react";
import "./join.css";

export default function JoinButton() {
  return (
    <>
      <div className="joibss">
        <div style={{ textAlign: "center" }}>
          <h3>Create an account</h3>
          <p>STARBUCKS® REWARDS</p>
          <small>
            Join Starbucks Rewards to earn Stars for free food and drinks, any
            way you <br /> pay. Get access to mobile ordering, a birthday
            Reward, and moremore.
          </small>
        </div>
        <div className="join">
          <div className="center">
            <form>
              <p>* indicates required field</p>
              <h5>Personal Information</h5>
              <div className="inputbox">
                <input type="text" required="required" />
                <span>First Name</span>
              </div>
              <div className="inputbox">
                <input type="text" required="required" />
                <span>Last Name</span>
              </div>

              <h5>Account Security</h5>
              <div className="inputbox">
                <input type="text" required="required" />
                <span>Email address</span>
              </div>
              <div className="inputbox">
                <input type="text" required="required" />
                <span>Password</span>
              </div>
              <div style={{ lineHeight: "3" }}>
                <h4 style={{ color: "#006241", textDecoration: "underline" }}>
                  Already have a Starbucks gift card?
                </h4>
                <h4 style={{ color: "rgba(0,0,0,.58)" }}>
                  COLLECT MORE STARS & EARN REWARDS
                </h4>
                <p>
                  Email is a great way to know about offers and whats new from
                  Starbucks.
                </p>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1">
                  {" "}
                  Yes, I’d like email from Starbucks
                </label>
                <p style ={{color:'rgba(0,0,0,.58)'}}>Know about initiatives, announcements and product offers.</p>
              </div>
              <h4>TERMS OF USE</h4>
              <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                /> <label for="vehicle1">
                {" "}
                Yes, I’d like email from Starbucks
              </label>I agree <br/>
              <div className="inputbox">
                <input type="button" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
