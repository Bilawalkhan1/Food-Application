import React from 'react';
import { Link } from 'react-router-dom'
import Header from '../../UIComponents/Userui/Header'
function OrderPlace({ cart }) {
    return (
        <div>
            <Header cart={cart} />
            <section className="py-5">
                <div class="container mt-4">
                    <div class="row">

                        <div class="col-lg-12 my-lg-0 my-1">
                            <div id="main-content tabbable-line" >
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="order my-3 bg-light">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="d-flex flex-column justify-content-between order-summary">
                                                        <div class="d-flex align-items-center">
                                                            <div class="text-uppercase">Order #fur10001</div>
                                                            <div class="blue-label ms-auto text-uppercase">paid</div>
                                                        </div>
                                                        <div class="fs-8">Products #03</div>
                                                        <div class="fs-8">22 August, 2020 | 12:05 PM</div>
                                                        <div class="rating d-flex align-items-center pt-1"> <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt="" />
                                                            <span class="px-2">Rating:</span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span> </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                                                        <div class="status">Status : Delivered</div>
                                                        <div class="btn btn-primary text-uppercase">order info</div>
                                                    </div>
                                                    <div class="progressbar-track">
                                                        <ul class="progressbar">
                                                            <li id="step-1" class="text-muted green"> <span class="fas fa-gift"></span> </li>
                                                            <li id="step-2" class="text-muted green"> <span class="fas fa-check"></span> </li>
                                                            <li id="step-3" class="text-muted green"> <span class="fas fa-box"></span> </li>
                                                            <li id="step-4" class="text-muted green"> <span class="fas fa-truck"></span> </li>
                                                            <li id="step-5" class="text-muted green"> <span class="fas fa-box-open"></span> </li>
                                                        </ul>
                                                        <div id="tracker"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="order my-3 bg-light">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="d-flex flex-column justify-content-between order-summary">
                                                        <div class="d-flex align-items-center">
                                                            <div class="text-uppercase">Order #fur10001</div>
                                                            <div class="green-label ms-auto text-uppercase">cod</div>
                                                        </div>
                                                        <div class="fs-8">Products #03</div>
                                                        <div class="fs-8">22 August, 2020 | 12:05 PM</div>
                                                        <div class="rating d-flex align-items-center pt-1">
                                                            <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png" alt="" />
                                                            <span class="px-2">Rating:</span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="fas fa-star"></span> <span class="far fa-star"></span> </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-8">
                                                    <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                                                        <div class="status">Status : Delivered</div>
                                                        <div class="btn btn-primary text-uppercase">order info</div>
                                                    </div>
                                                    <div class="progressbar-track">
                                                        <ul class="progressbar">
                                                            <li id="step-1" class="text-muted green"> <span class="fas fa-gift"></span> </li>
                                                            <li id="step-2" class="text-muted"> <span class="fas fa-check"></span> </li>
                                                            <li id="step-3" class="text-muted"> <span class="fas fa-box"></span> </li>
                                                            <li id="step-4" class="text-muted"> <span class="fas fa-truck"></span> </li>
                                                            <li id="step-5" class="text-muted"> <span class="fas fa-box-open"></span> </li>
                                                        </ul>
                                                        <div id="tracker"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        Completed Orders
                            </div>
                                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        Canceled Orders
                            </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderPlace
