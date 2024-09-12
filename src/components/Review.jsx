import React from 'react';
import { review } from './Data';
import qouteImg from "../assets/images/quote-img.png";

const Review = () => {
  return (
    <>
    <section className='review' id='review'>
        <h1 className='heading'>
        customer's <span>review</span>
        </h1>
        <div className="box-container">
            {
                review.map((item, index)=> (
                    <div key={index} className="box">
                        <img src={qouteImg} alt="" className='qoute'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
                        <img src={item.img} alt="" className='user' />
                        <h3>john deo</h3>
                        <div className='stars'>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star-half-alt'/>
                        </div>
                    </div>

                ))
            }
        </div>
    </section>
    </>
  )
}

export default Review
