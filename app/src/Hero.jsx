import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faLinkedinIn,faTwitter} from '@fortawesome/free-brands-svg-icons'
const Hero = () => {
  return (
   <section className="hero3d">
    <div className='hero3d-content'>
        <h1 className='hero3d-title'>Crafting Unique 3D Experiences</h1>
        <p className='hero3d-description'>
            I create interactive and immersive 3D  web applications using the latest technologies
        </p>
        <button className='hero3d-button'>View My Portfolio</button>
   
    <div className='hero3d-social'>
        <a href="#facebook" className='social-icon facebook'>
            <FontAwesomeIcon icon={faFacebookF}/>
        </a>
        <a href="#twitter" className='social-icon twitter'>
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        <a href="#linkedin" className='social-icon linkedin'>
            <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
    </div>
    </div>
    <div className='hero3d-background'>
        <div className='sphere'></div>
        <div className='cube cube1'></div>
        <div className='cube cube2'></div>
    </div>
   </section>
  )
}

export default Hero
