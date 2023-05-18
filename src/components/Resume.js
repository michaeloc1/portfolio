function Resume(){
    return(
        <section className="section-format" id="about">
        <h1 className="section-headers">Resume</h1>
        <a href='./myresume.pdf' download>Click</a> here to download my Resume
        <h3>Front End Skills</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
            <li>responsive design</li>
        </ul>
        <h3>Front End Skills</h3>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL Sequelize</li>
            <li>MongoDB Mongoose</li>
            <li>Rest</li>
            <li>GraphQL</li>
        </ul>
       </section>
    )
}

export default Resume;