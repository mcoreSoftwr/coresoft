import { useState } from "react";
interface ServiceItems {
    icon: string;
    title: string;
    description: string;
}

export const ServiceItem: React.FC<ServiceItems> = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const { icon, title, description } = props;
    return (
        <>
            <div
                className={`relative`}
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`${isHovered ? "bg-gray-900 shadow-gray-500 rounded-md" : ""}`}
                >
                    <div
                        className={`flex flex-col items-center ${isHovered ? "scale-90" : ""} transition-transform duration-300`}
                    >
                        <svg className="w-32 h-32 mb-4" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath>
                                    <circle cx="60" cy="60" r="60" />
                                </clipPath>
                            </defs>

                            <circle cx="60" cy="60" r="60" className="fill-current text-blue-600" />
                            <image xlinkHref={icon} x="0" y="0" width="120" height="120" />
                        </svg>


                        <h4 className="h4 mb-2">{title}</h4>
                        <p className="text-lg text-gray-400 text-center">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};
