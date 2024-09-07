import React from 'react'

const Contact = () => {
  return (
   <section className='contact3d'>
    <div className='contact3d-content'>
        <h2 className='contact3d-title'>Contact Me</h2>
        <p className='contact3d-description'>
            I'd love to hear from you! Whether you have a question.
        </p>
        <form className='contact3d-form'>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text"></input>
            </div>
            <div className='form-group'>
                <label htmlFor="name">Email</label>
                <input type="text"></input>
            </div>
            <div className='form-group'>
                <label htmlFor="name">Message</label>
                <textarea type="text"></textarea>
            </div>
            <button>Send</button>
        </form>
    </div>
    <div className='contact3d-background'>
        <div className='cube'></div>
        <div className='sphere'></div>
        <div className='cone'></div>
    </div>
   </section>
  )
}

export default Contact
