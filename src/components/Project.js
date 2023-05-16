function Project(props){
    return(

//<div className="col-12 col-sm-6 col-lg-5 mb-5 format-card">
//<section className="row justify-content-between">
//<a href={props.url}><div className="card bg-dark text-white">
 //       <img className="card-img" src={require('../' + props.image)} alt="Card image"></img>
 // <div className="card-img-overlay">
 //   <h5 className="card-title">{props.name}</h5>
 //   <p className="card-text">{props.tech}</p>
 //   <a href={props.github} >Github Link </a>
 //     </div>
//</div></a>
//</section>
//</div>
<div className="col-6">
<div className="img__wrap">
  <img className="img__img" src={require('../' + props.image)}></img>
  <p className="img__description">This image looks super neat.</p>
</div>
</div>
    )
}

export default Project;