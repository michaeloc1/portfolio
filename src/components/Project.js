function Project(props) {
  return (
    <div className="col-lg-6 col-sm-12">
      <div className="img__wrap">
        <a href={props.url} target="_blank"><img className="img__img" src={require('../' + props.image)}></img>
          <div className="img__description">
            <h2> {props.name}<span className="span-icon"><a href={props.github} target="_blank"><i className="fa-brands fa-github fa-2x" ></i></a></span></h2>
            <h5>{props.tech}</h5>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Project;