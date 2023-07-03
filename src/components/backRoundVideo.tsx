import { ReactNode } from "react";

interface BackroundVideo {
    videoSource: string;
    children: ReactNode
    blur: number;
}


const BackgroundVideo = ({ videoSource, children, blur }: BackroundVideo) => {
    return (
        <>
            <div className='container'>
                <video
                    style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                    autoPlay
                    loop
                    muted
                    id="video-id"
                    className='video' >
                    {/* TODO make it accept multiple media types */}
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {children}
            </div>
            <span id="video-bottom"></span>
        </>
    )
}

export default BackgroundVideo






