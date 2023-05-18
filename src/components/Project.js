function Project(props) {

  return (
    <div className="col-lg-6 col-sm-12">
      <div className="img__wrap">
        <img className="img__img" src={require('../' + props.image)}></img>
          <div className="img__description">
          <a href={props.url} target="_blank" className="nav-link"><h2> {props.name}</h2></a>
            <span className="span-icon">
              <a href={props.github} target="_blank">
                <i className="fa-brands fa-github fa-2x"></i>
                </a>
                </span>
            <h5>{props.tech}</h5>
          </div>
      </div>
    </div>
  )
}

export default Project;