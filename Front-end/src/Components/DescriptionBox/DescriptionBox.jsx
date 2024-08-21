import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descirptionbox-navigator">
                <div className="decriptionbox-nav-box">Description</div>
                <div className="decriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-decription">
                <p>An e-commerce website is an online platform that facilitates the buing and selling of products or services over the internet. These website enable transactions between buyers and sellsers. </p>
           <p>
            E-commerce websites display the products or services available for sale, often organized by categories. Each product typically has a dedicated page with details such as description, price, images, and reviews.
           </p>
            </div>
        </div>
    )
}

export default DescriptionBox
