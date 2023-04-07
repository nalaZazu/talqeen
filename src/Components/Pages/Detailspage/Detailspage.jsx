import React from 'react'

import student from "../../assets/images/student.png"
import Iframe from 'react-iframe'
import { detailsArray } from './detailsArray'
export default function Detailspage() {
    const details = detailsArray;
    return (
        <React.Fragment>
            <section className='bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mt-3 ">
                            <h2 className="main-heading  ">
                                Video Title
                            </h2>
                            <Iframe src="https://www.youtube-nocookie.com/embed/zZ1inK94DqU?controls=1&amp;modestbranding=1&amp;showinfo=0&amp;showsearch=0&amp;rel=0" frameborder="0" allowfullscreen
                                width="560" height="315"
                                // width="675px"
                                // height="320px"
                                id=""
                                className="mb-3"
                                display="block"
                                position="relative" 
                               
                                />

                        </div>
                        <div className="col-lg-5 mt-5">

                            {
                                details.map((item) => {
                                    const { title, img } = item
                                    return (
                                        <div className="card m-2">
                                            <div class="card-body d-flex">
                                                <span>
                                                    <img src={img} alt="student" className="w-75" />
                                                </span>
                                                <span className='title'>{title}</span>

                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}
