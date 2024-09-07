import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faTrophy,faProjectDiagram} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const About = () => {
  return (
   <section className='about3d'>
    <div className='about3d-content'>
    <h2 className='about3d-title'>
    About Me
    </h2>
    <p className='about3d-description'>htgjnghughfdnvdmfnbhrgrudbcndddddddddddnnnnnnndwgdhwbdnwd</p>
   <div className='about3d-cards'>
    <div className="card">
        <FontAwesomeIcon icon={faUser} className='card-icon'></FontAwesomeIcon>
        <h3 className='card-title'>Experience</h3>
        <p className='card-text'>Over 5 years of exp.</p>
    </div>
    <div className="card">
        <FontAwesomeIcon icon={faTrophy} className='card-icon'></FontAwesomeIcon>
        <h3 className='card-title'>Achievments</h3>
        <p className='card-text'>Over 5 years of exp.</p>
    </div>
    <div className="card">
        <FontAwesomeIcon icon={faProjectDiagram} className='card-icon'></FontAwesomeIcon>
        <h3 className='card-title'>Skills</h3>
        <p className='card-text'>HTML,CSS,Js,Reactjs,Python</p>
    </div>
   </div>
   </div>
   <div className='about3d-background'>
    <div className='ring'></div>
    <div className='pyramid'></div>
    <div className='prism'></div>
   </div>
   </section>
  )
}

export default About
