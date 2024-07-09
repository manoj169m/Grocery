import React from 'react'
import { Link } from 'react-router-dom'
import './Foot.css'

const Foot = () => {
  return (
    <div className='foot-whole' id='contacts'>
        <div className="foot-main">
            <div className="foot-head">
                <h3>Grocery shop</h3>
                <p>Welcome to Your Grocery, your trusted neighborhood grocery store.
                     We are committed to providing you with the freshest produce, quality products, and excellent customer service. Whether you're shopping for everyday essentials or specialty items, we strive to meet all your grocery needs with a wide variety of choices and competitive prices. Thank you for choosing us as your preferred grocery shop. We look forward to serving you!</p>
            </div>
            <div className="foot-links">
                <h3>Quick Links</h3>
                <ul>
                   {/* <Link to="/home"> <li> home</li></Link>   */}
                    <Link to="/guide"><li>about</li></Link>
                  <Link to="/Productuse">  <li>Product</li></Link>
                  <a  target='_blank' href="https://www.linkedin.com/in/mano-bharathi-b-157982223/"><li>Linkedin ID</li></a>
                </ul>
            </div>
            <div className="foot-contacts">
                <h3>Contacts</h3>
                <ul>
                    
                     <li>  123,serlock Homes, <br />
                groove street</li>
                <li>phone:9080536574</li>
                <li>E-mail:manoj16935@gmail.com</li>
                
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Foot
