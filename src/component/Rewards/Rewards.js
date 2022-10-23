import React from "react";
import "./Rewards.css";

export default function Rewards() {
  return (
    <>
      <div className="rewards">
        <div className="container">
          <h4>STARBUCKS® REWARDS</h4>
        </div>
      </div>
{/* Getting */}
<div className="Getting">
    <div className="container">
        <h2>Getting started is easy</h2>
        <p>Earn Stars and get rewarded in a few easy steps.</p>
    <div className="row">
        <div className="GettingCol">
            <span className="get">1</span>
              <h3>Create an account</h3>
            <p>To get started, join now. You can also join in the app <br/>to get access to the full range of Starbucks® Rewards<br/> benefits.</p>
        </div>
        <div className="GettingCol">
            <span className="get">2</span>
              <h3>Order and pay how you’d like</h3>
            <p>To get started, join now. You can also join in the app <br/>to get access to the full range of Starbucks® Rewards<br/> benefits.</p>
        </div>
        <div className="GettingCol">
            <span className="get">3</span>
              <h3>Earn Stars, get Rewards</h3>
            <p>To get started, join now. You can also join in the app <br/>to get access to the full range of Starbucks® Rewards<br/> benefits.</p>
        </div>
    </div>
    </div>

</div>

{/* favorites */}
<div className="favorites">
  <div className="container">
    <h1>Get your favorites for free</h1>
  </div>
</div>

{/* Customize */}
<div className="Customize">
        <div className="container">
    <div className="row">
      <div className="Customize-col">
          <div className="Customize-image">
              <img src ="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png"></img>
          </div>
      </div>
      <div className="Customize-col">
          <div className="Customize-text">
              <h2>Customize your drink</h2>
              <p>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup. </p>
          </div>
          </div>
      </div>
    </div>
</div>
{/* Getting */}
<div className="Getting">
    <div className="container">
        <h2>Endless Extras
</h2>
        <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy<br/> ordering, tasty Rewards and—yes, free coffee.

</p>
    <div className="row">
        <div className="GettingCol">
        <span ><img src ="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" width={'100px'}/></span>

              <h3>Fun freebies</h3>
            <p>To get started, join now. You can also join in the app <br/>to get access to the full range of Starbucks® Rewards<br/> benefits.</p>
            <p style={{textDecoration : 'underline'}}>Learn more</p>
        </div>
        <div className="GettingCol">
            <span ><img src ="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" width={'100px'}/></span>
              <h3>Order & pay ahead</h3>
            <p>To get started, join now. You can also join in the app <br/>to get access to the full range of Starbucks® Rewards<br/> benefits.</p>
            <p style={{textDecoration : 'underline'}}>Learn more</p>

        </div>
        <div className="GettingCol">
        <span ><img src ="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" width={'100px'}/></span>

              <h3>Get to free faster</h3>
          
          <p>To get started, join now. You can also join in the app <br/>to get access to the full range of Starbucks® Rewards<br/> benefits.</p>
          <p style={{textDecoration : 'underline'}}>Learn more</p>
        </div>
    </div>
    </div>

</div>

      {/* last  */}
      <div className="last">
        <div className="container">
          <div className="row">
            <div className="rewardCol">
              <p>At participating stores. Restrictions apply.</p>
              <h4>EARNING STARS</h4>
              <p>
                Stars cannot be earned on purchases of alcohol, Starbucks Cards
                or Starbucks Card reloads.
              </p>
              <p>
                Earn 1 Star per $1 spent when you scan your member barcode in
                the app, then pay with cash,<br/> credit/debit cards or mobile
                wallets at participating stores. You can also earn 1 Star per $1<br/>
                spent when you link a payment method and pay directly through
                the app.
              </p>
              <p>
                Earn 2 Stars per $1 spent when you load funds and pay with your
                digital Starbucks<br/> Card in the app. You can also earn 2 Stars per
                $1 spent when you pay <br/>in-person at a participating store with
                your registered physical Starbucks Card or scan your member<br/>
                barcode in the app, and then use any physical Starbucks Card
                (regardless of<br/> whether it is registered)to complete the
                purchase.
              </p>
              <h4>BENEFITS</h4>
              <p>
                Free refills available during same in-store visit only. To
                qualify for the Birthday Reward<br/>, you must have made at least one
                Star-earning transaction.
              </p>
            </div>
     <div className="rewardCol">
              <p>  .  </p>
              <h4>TERMS OF USE
</h4>
              <p>
              For full program details visit 
starbucks.com/rewards/terms
opens in new window.
              </p>
              <p>
              * Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards <br/>Visa® Card: See your Card Rewards Program Agreement for more details.
              </p>
              <p>
                Earn 2 Stars per $1 spent when you load funds and pay with your
                digital Starbucks<br/> Card in the app. You can also earn 2 Stars per
                $1 spent when you pay <br/>in-person at a participating store with
                your registered physical Starbucks Card or scan your member<br/>
                barcode in the app, and then use any physical Starbucks Card
                (regardless of<br/> whether it is registered)to complete the
                purchase.
              </p>
              <h4>REDEEMING REWARDS
</h4>
              <p>
                Free refills available during same in-store visit only. To
                qualify for the Birthday Reward<br/>, you must have made at least one
                Star-earning transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
