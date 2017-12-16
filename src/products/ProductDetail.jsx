import React, { PropTypes } from 'react'

const ProductDetail = ({ loading, product, onAddItem }) => {
  if (product) {
    const { _id, image, name, description, price, deliveryStimate, category } = product
    return (
      <section className='container'>
        <div className='row'>
          <figure className='col-lg-6'>
            <img src={image} alt={description} className='figure-img img-thumbnail rounded' />
          </figure>
          <div className='col-lg-6'>
            <br />
            <h4>{name}</h4>
            <p>{description}</p>
            <ul className='list-group'>
              <li className='list-group-item'>
                Precio: <strong>{price} &euro;</strong>
              </li>
              <li className='list-group-item'>
                Entrega: <strong>{deliveryStimate}</strong>
              </li>
              <li className='list-group-item'>
                Categoría: <span className='badge badge-pill badge-info'>{category}</span>
              </li>
            </ul>
            <br/>
            <button
              className='btn btn-primary'
              onClick={() => onAddItem(product)}
              >
              <span className='fa fa-cart-plus' /> Añadir al carrito
            </button>
          </div>
        </div>
      </section>
    )
  }
  return (<span>Cargando datos...</span>)
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onAddItem: PropTypes.func
}

export default ProductDetail
