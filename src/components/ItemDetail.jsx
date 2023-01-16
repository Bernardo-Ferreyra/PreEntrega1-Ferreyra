import React from 'react'
import "./styles/itemDetail.css"
import Button from 'react-bootstrap/Button';

const ItemDetail = ({item}) => {
  return (

<div className="container-fluid">
    <div className="card">
        <div className="card-body">
            <h3 className="card-title">{item.titulo}</h3>
            <h6 className="card-subtitle">{item.categoria} {item.titulo}</h6>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-7">
                    <div className="white-box text-center"><img src={item.img} alt="unafoto" className='img-detail' /></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-5 bg-dark text-white">
                    <h4 className="box-title mt-5">Descripcion</h4>
                    <p>{item.descripcion}</p>
                    <h2 className="mt-5">${item.precio}</h2>
                    <Button variant="warning"><i className="bi bi-cart3 mr-2"> Agregar al carrito</i></Button>
                    <h3 className="box-title mt-5">Info</h3>
                    <ul className="list-unstyled">
                        <li><i className="bi bi-check"></i>{item.marca}</li>
                        <li><i className="bi bi-check"></i>{item.tipo}</li>
                        <li><i className="bi bi-check"></i>{item.caracteristica}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>



  )
}

export default ItemDetail


/*     <div className='containerDetail'>
    <img src={item.img} alt="unafoto" />

    <article>
      <h2>{item.titulo}</h2>
      <section>
        <h3>${item.precio}</h3>
      </section>

      <section>
        <p>{item.descripcion}</p>
      </section>
    </article>
  </div> */