function About(){
    return(
        <section className="section-format" id="about">
        <h1 className="section-headers">About Me</h1>
        <img src={require('../portfolio-pic2.jpg')} className="about-img"></img>

         <p>
             My name is Michael O'Cone and I am studying to be a web developer
             building full stack web applications.  I have previous traing as 
             a software developer that culminated in becoming a Microsoft Certified
             Solutions Developer (MCSD).  My interest in computers
             started at an early age when I received a Commodore 64. I enjoyed
             experimenting with programming and observing real-time output.  I also like
             building PC's and have built several already.
 
         </p>
         <p>
             I am currently learning to build responsive websites that use technologies
             such as JavaScript, node.js, Express.js, React and much more. I have developed
             websites using Sequelize and mySQL as well as MongoDB and Mongoose.  
               I have previous professional experience as a web developer building a career Site
               that allowed users to make a profile, search for jobs, and apply for jobs.
               In my current position as a sales associate in a busy retail store I spend 
             my day multi-tasking helping customers with their needs and making sure
             merchandise is on the shelf and the store is neat and safe.
             
         </p>
     </section>
    )
}

export default About;