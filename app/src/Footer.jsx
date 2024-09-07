import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
  <footer className='footer3d'>
    <div className='footer3d-content'>
        <div className='footer3d-info'>
            <h2 className='footer3d-title'>Contact info</h2>
            <p className='footer3d-address'>223 your Street, City</p>
            <p className='footer3d-email'>abc@gmail.com</p>
            <p className='footer3d-phone'>354 33 22 34</p>
        </div>
        <div className='footer3d-socila'>
            <h2 className='footer3d-title'>Foolow Me</h2>
            <div className='footer3d-social-icons'>
                <a href="#">
                    <FontAwesomeIcon icon={faFacebook} className='social-icon'></FontAwesomeIcon>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faTwitter} className='social-icon'></FontAwesomeIcon>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} className='social-icon'></FontAwesomeIcon>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faGithub} className='social-icon'></FontAwesomeIcon>
                </a>
            </div>
        </div>
    </div>
    <div className='footer3d-background'>
        <div className='pyramid'></div>
        <div className='cube'></div>
        <div className='shpere'></div>
    </div>
  </footer>
  )
}

export default Footer
