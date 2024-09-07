import React from 'react'

const Project = () => {
    const projects=[
        {
        title:"Project 1",
        description:"E Commerce",
        image:"baby.jpg"
        },
        {
            title:"Project 2",
            description:"Blog",
            image:"baby.jpg"
            },
            {
                title:"Project 2",
                description:"Blog",
                image:"baby.jpg"
                },
            
       

    ]
  return (
    <section className='projects3d'>
        <div className='projects3d-content'>
           <h2 className='projects3d-title'>Projects</h2>
           
           <div className='projects3d-cards'>
            {projects.map((pr,index) =>(
                <div className='project-card' key={index}>
                    <img src={pr.image} className="project-icon"></img>
                    <h3 className='project-title'>{pr.title}</h3>
                    <p className='project-text'>{pr.description}</p>
                </div>
            ))}
           </div>
        </div>
        <div className='projects3d-background'>
            <div className='cube'></div>
            <div className='pyramid'></div>
            <div className='sphere'></div>
        </div>
    </section>
  )
}

export default Project
