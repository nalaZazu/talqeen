import React, { useState } from 'react'

import student from "../../assets/images/student.png"
import Iframe from 'react-iframe'
import YouTubePlayer from 'react-youtube'

import { detailsArray } from './detailsArray'
export default function Detailspage() {
    const details = detailsArray;
    let [youtube, setYoutube] = useState('');
    let video = [
        {
            videoID: 'zZ1inK94DqU',
            title: "Lorem ipsum dolor sit amet "
        },
        
    ]
    // const option = {
    //     height: '560',
    //     width: '315',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };

    return (
        <React.Fragment>
            <section className='bg-light'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7   mt-3 ">
                            <h2 className="main-heading  ">
                                Video Title
                            </h2>
                            {/* <YouTubePlayer videoId={video}  opts={option.width} />
                            {
                                video.map((item) => {
                                    return (
                                        <div onClick={() => {
                                            setYoutube
                                                (item.videoID)
                                        }} >

                                        </div>
                                    )
                                })
                            } */}
                            {
                                video.map((item) => {
                                    return (
                                        <Iframe src={`https://www.youtube.com/embed/${item.videoID}`} allowfullscreen
                                            width="560" height="315"
                                            // width="675px"
                                            // height="320px"
                                            id=""
                                            className="mb-3"
                                            display="block"
                                            position="relative"

                                        />
                                    )
                                })
                            }


                        </div>
                        <div className="col-lg-5 mt-5">

                            {
                                video.map((item) => {
                                    const { title, img } = item
                                    return (
                                        <div className="card m-2">
                                            <div class="card-body d-flex">
                                                {/* <img src={img} alt="student" className="w-75" /> */}
                                                <img src={"http://img.youtube.com/vi/" + item.videoID + "/0.jpg"} className='w-25' />

                                                <span className='title ms-3'>{title}</span>

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
