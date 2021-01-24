import React from 'react'

export default function CartItem({ item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="product" className="img-fluid" style={{ height: "5rem", width: "5rem"}} />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-n">{title}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-n">${price}</span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span 
                            className="btn btn-black mx-1"
                            onClick={() => decrement(id)}    
                        >
                            -
                        </span>
                        <span className="btn btn-black mx-">{count}</span>
                        <span 
                            className="btn btn-black mx-1"
                            onClick={() => increment(id)}    
                        >
                            +
                        </span>
                         
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon">
                    <i 
                        className="fas fa-trash"
                        onClick={() => removeItem(id)}
                    >
                    </i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>${total}</strong>
            </div>
        </div>
    )
}
