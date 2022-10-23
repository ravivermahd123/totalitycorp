import React from 'react'
import './GiftCard.css'

export default function GiftCardss() {
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 4, name: "Jane Doe" },
        { id: 5, name: "Jane Doe" },
        { id: 6, name: "Jane Doe" },
      ];
  return (
   <>
    <div className='container'>
        <h4>FEATURED</h4>

        <div class="row">
        {data.map((name) => (
            <div class="column">
                <div class="card">
                   <img src='https://www.shutterstock.com/image-illustration/gold-gift-card-bow-ribbon-600w-1252629514.jpg' width={'100%'}/>
                           
                </div>
            </div>
                        ))}
        </div>
        </div>  
        <div className='container'>
        <h4>DIWALI</h4>

        <div class="row">
        {data.map((name) => (
            <div class="column">
                <div class="card">
                   <img src=' https://www.shutterstock.com/image-vector/gift-card-template-layout-hanging-600w-2044090358.jpg' width={'100%'}/>

               
                </div>
            </div>
                        ))}
      
        </div>
        </div>
        <div className='container'>
        <h4>BIRTHDAY</h4>

        <div class="row">
        {data.map((name) => (
            <div class="column">
                <div class="card">
                <img src='https://pub-static.fotor.com/assets/projects/pages/600w/471cf18f915842be9ccaec5362cc128a_97c6a06838aa492799de67d22cfcc71e_thumb.jpg' width={'100%'}/>
                   

                </div>
            </div>
                        ))}
      
        </div>
        </div>    

        <div className='container'>
        <h4>THANK YOU</h4>

        <div class="row">
        {data.map((name) => (
            <div class="column">
                <div class="card">
                <img src='https://img.freepik.com/free-vector/thank-you-card-blue-tones_23-2148665027.jpg?w=1060&t=st=1666421401~exp=166' width={'100%'}/>
                   
                </div>
            </div>
                        ))}
        </div>
        </div>   

        <div className='container'>
        <h4>CELEBRATION</h4>

        <div class="row">
        {data.map((name) => (
            <div className="column">
                <div className="card">
                   
                <img src='https://img.freepik.com/free-psd/flat-lay-happy-diwali-festival-mock-up-copy-space-greeting-card_23-2148667188.jpg' width={'100%'} className="imageshello"/>

                </div>
            </div>
                        ))}
        
      
        </div>
        </div>  

<div style={{background:'#edebe9'}}>
    <div className='container' style={{padding:'30px  0px 30px 0px'}}>
        <h3>GIFT CARD SUPPORT</h3>
        <p>Use the links below to manage eGifts you have sent <br/>or received, or view our full Card Terms & Conditions.</p>
         <button className='button-21'>eGift Support</button> &nbsp;
         <button className='button-21'>See Terms & Conditions</button>&nbsp;
         <button className='button-21'>eGift FAQs</button>
    </div>
</div> 
   </>
  )
}