import React, { useEffect, useRef, useState } from 'react'
import YouTube from 'react-youtube'
let videoIdList = ["AOMpxsiUg2Q", "XM-HJT8_esM"];
// let array = [];
export default function Detailspage() {
    const [videoId, setVideoId] = useState(videoIdList[0]);
    let [update, setUpdate] = useState([])
    const [i, setIndex] = useState(0);

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };
    useEffect(() => {
        setVideoId(videoIdList[i]);
    }, [i]);

    const onEnd = () => {
        // i++;
        // setVideoId(videoIdList[i]);
        setIndex(i => i + 1);
        for (let item of videoIdList) {
            const newArray = [];
            if (item.find === newArray) {
                newArray.push(item);
            }
            setUpdate(newArray)

        }
    }
    return (
        <React.Fragment>
            <section className=' layout_padding' >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 ">
                            <h2 className="main-heading  ">
                                {/* Video Title */}
                            </h2>
                            <YouTube videoId={videoId}
                                opts={opts} onEnd={onEnd} />
                        </div>
                        <div className="col-lg-5 mt-5">
                            {
                                update.map((item) => {
                                    return (
                                        <div>
                                            <img className="w-25" src={"http://img.youtube.com/vi/" + item.videoId + "/0.jpg"} />                                        </div>
                                    )
                                })
                            }
                            {/* {
                                videoId.map((item) => {
                                    return (
                                        <div className="card d-flex m-2" style={{ flexDirection: "row" }} onClick={() => {
                                            setVideoId(item.videoID)
                                        }}>
                                            <img className="w-25" src={"http://img.youtube.com/vi/" + item.videoID + "/0.jpg"} />
                                            <p className='p-2'>{item.videotitle}</p>
                                        </div>
                                    )
                                })
                            } */}

                        </div>
                    </div>
                </div>

            </section >
        </React.Fragment >
    )
}
