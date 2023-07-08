import sourceVideo from "../assets/videos/video.mp4";
import { SectionProps } from "../pages/Home";

export const Introduction: React.FC<SectionProps> = (props:SectionProps) => {
    const {sectionRef} = props;
    return (
        <>
            <section ref={sectionRef} >
                <div className="videoMain">
                    <div className="videoOverlay" /> 
                    <video src={sourceVideo}
                        className="videoTag"
                        autoPlay
                        loop
                        muted
                    />
                    <div className="videoContent  mx-auto px-4 sm:px-6 justify-center items-center">

                        {/* Hero content */}
                        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

                            {/* Section header */}
                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                                <h1 className="h1 mb-4" >Landing template for startups</h1>
                                <p className="text-xl text-gray-900 mb-8" >Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                                <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                                    <div >
                                        <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                                    </div>
                                    <div >
                                        <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    </div>
                
            </section>
        </>
    );
};
