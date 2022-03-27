import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../UIComponents/Userui/Header';

function Home({ menuItems, cart, handleAddItemToCart, handleRemoveItemFromCart }) {

    return (
        <div>
            <Header cart={cart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
            <header className="bg-dark py-5 hero-header" >
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h1 className="display-4 fw-bolder f-bold">Shop in style</h1>
                        <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>

                    </div>
                </div>
            </header>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 
                    row-cols-xl-3 justify-content-start">
                        {
                            menuItems.map(item => {
                                return (
                                    <div key={item._id} className="col mb-5">
                                        <div className="card h-100 product-card">
                                            <Link to={`/product/${item._id}`}>
                                                <img className="card-img-top" src={`/api/uploads/${item.ImagePlaceholder[0]}`} width="100%" height="200" alt="..." />
                                                <div className="card-body p-4 pb-0">
                                                    <div className="text-left">
                                                        <h5>{item.title}</h5>
                                                        <p className="fw-bolder">{item.subTitle}</p>
                                                        <div className="d-flex justify-content-between">
                                                            <p className="price">{item.Quantity} <span> {item.Unit}</span></p>
                                                            <p className="price">{item.price} <span> {item.currency}</span></p>
                                                            <p className="price">{item.description} <span> {item.currency}</span></p>

                                                        </div>

                                                    </div>
                                                </div>
                                            </Link>

                                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div className="text-center">
                                                    <button className="btn btn-block btn-outline-dark mt-auto custom-button-primary"
                                                        onClick={() => {
                                                            handleAddItemToCart(item)
                                                        }}
                                                    >Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }

                        {/* <div className="col mb-5">
                            <div className="card h-100">
                                <div className="badge bg-dark text-white position-absolute" style={{
                                    top: "0.5rem",
                                    right: "0.5rem"
                                }}>Sale</div>
                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Special Item</h5>
                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                            <div className="bi-star-fill"></div>
                                        </div>
                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                    $18.00
                                </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><Link className="btn btn-outline-dark mt-auto"
                                        to="#">Add to cart</Link></div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
