import Project from './Project';

const projects = [
  {
    name: 'Sypher Link',
    tech: 'socket.io Express Apollo Graphql',
    github: 'https://github.com/X-A-gif/SypherLink',
    url: 'https://floating-fjord-61494.herokuapp.com/',
    image: 'sypher.png'
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

  },
  {
    name: 'JavaScript Quiz',
    tech: 'Javascript',
    github: 'https://github.com/michaeloc1/module-4-quiz',
    url: 'https://michaeloc1.github.io/module-4-quiz/',
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
    name: 'Employee Tracker',
    tech: 'Sequelize MySQL Inquirer',
    github: 'https://github.com/michaeloc1/EmployeeTracker',
    url: 'https://github.com/michaeloc1/EmployeeTracker',
    image: 'MySql.jpg'
  },
  {
    name: 'HTML Portfolio',
    tech: 'HTML CSS',
    github: 'https://github.com/michaeloc1/MyPortfolio',
    url: 'https://michaeloc1.github.io/MyPortfolio/',
    image: 'portfolio.jpg'
  },
]

function Portfolio() {
    return (
    <section className="section-format">
      <h1>Projects</h1>
    <div className="container">
      <div className="row">
        {projects.map((project, index) => (
          <Project name={project.name} tech={project.tech} github={project.github} url={project.url} image={project.image} key={index} />
        ))}
      </div>
    </div>
    </section>


  )
}

export default Portfolio;