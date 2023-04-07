import React from 'react'
import { videoArray } from './videoArray'
import arrow from "../../assets/images/right-arrow.png"
import { Link } from 'react-router-dom';
function Videos() {
    let array = videoArray;
    return (
        <React.Fragment>

            <section className="teacher_section layout_padding-bottom">
                <div className="container">
                    <h2 className="main-heading ">
                        Our Teachers
                    </h2>
                    <p className="text-center">
                        Ipsum available, but the majority h
                    </p>
                    <div className="teacher_container layout_padding2">
                        <div className="card-deck ">
                            {
                                array.map((item) => {
                                    return (
                                        <div className="card ">
                                            <img className="card-img-top" src={item.img} alt="Card image cap" />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.title}</h5>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <Link to="/single" className="call_to-btn  ">
                            <span>
                                See More
                            </span>
                            <img src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}

export default Videos