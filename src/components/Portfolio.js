import Project from './Project';

const projects = [
  {
    name: 'Tech Blog',
    tech: 'Sequelize Express Javascript',
    github: 'https://github.com/michaeloc1/TechBlog',
    url: 'https://nameless-dusk-20792.herokuapp.com/',
    image: 'TechBlog-resize.jpg'
  },
  {
    name: 'JavaScript Quiz',
    tech: 'Javascript',
    github: 'https://github.com/michaeloc1/module-4-quiz',
    url: 'https://https://michaeloc1.github.io/module-4-quiz//',
    image: 'JavascriptQuiz.jpg'
  },
  {
    name: 'Crypto Coin Site',
    tech: 'HTML CSS JavaScript API',
    github: 'https://github.com/X-A-gif/CoinMarket',
    url: 'https://x-a-gif.github.io/CoinMarket/',
    image: 'BlockChain.jpg'
  },
  {
    name: 'Tech Blog',
    tech: 'Sequelize Express Javascript',
    github: 'https://github.com/michaeloc1/TechBlog',
    url: 'https://nameless-dusk-20792.herokuapp.com/',
    image: 'TechBlog-resize.jpg'
  },
  {
    name: 'Tech Blog',
    tech: 'Sequelize Express Javascript',
    github: 'https://github.com/michaeloc1/TechBlog',
    url: 'https://nameless-dusk-20792.herokuapp.com/',
    image: 'TechBlog-resize.jpg'
  },
  {
    name: 'Weather Forcast',
    tech: "HTML Javascript API's",
    github: 'https://github.com/michaeloc1/WeatherForecast',
    url: 'https://michaeloc1.github.io/WeatherForecast/',
    image: 'WeatherForecast-resize.jpg'

  }
]

function Portfolio(){
    return(
        // <div>
        // <h1>portfolio section</h1>
        
        // <Project name='Project 1' url='https://yahoo.com'/>
        // </div>
       
<div className="section-format container">
      <h1>Projects</h1>
  <div className="row">
  {projects.map(project => (  
           <Project name={project.name} tech={project.tech} github={project.github} url={project.url} image={project.image}/>
        ))}
        </div>
  </div>


    )
}

export default Portfolio;