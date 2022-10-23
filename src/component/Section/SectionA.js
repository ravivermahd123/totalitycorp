import React from 'react';
import './Section.css'
function SectionA() {
    return ( 
        <section className='SectionA'>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='image'>
                        <img src = "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81151.jpg"/>
                    </div>
                </div>
                <div className='col'>
                    <div className='text'>
                        <div className='space2'>
                       <h1>Win a thousand Stars</h1><br/>
                       <p>We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*</p>
                       <br/><button class="button-21" role="button">Play to win</button>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        </section>
     );
}

export default SectionA;