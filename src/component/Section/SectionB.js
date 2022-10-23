import React from 'react';
import './Section.css'
function SectionB() {
    return ( 
        <section className='SectionA'>
         <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='text2'>
                        <div className='space3'>
                            <h3>A new way to earn sips and trips</h3><br/>
                            <p>Now you can link your Starbucks® Rewards + Delta <br/>SkyMiles® accounts to get:</p>
                            <br/>
                            <ul className='ulspace'>
                            <li>150 Stars + 500 miles when you link before 12/31</li>
                            <li>Double Stars on Delta travel days</li>
                            <li>1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**</li>
                            </ul><br/>
                            <button class="button-21" role="button">Link account</button>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='images'>
                        <img src = "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-81104.jpg"/>
                    </div>
                </div>
            </div>
            </div> 
        </section>
     );
}

export default SectionB;