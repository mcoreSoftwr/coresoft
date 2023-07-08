
interface ProfessionalItem {
    image: string,
    name: string,
    role: string
}

export const ProfItem: React.FC<ProfessionalItem> = (props) => {

    const { image, name, role } = props;
    return (
        <>
            <div
                className={`relative`}
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
            >
                <div
                    className={`transition duration-300 transform hover:-translate-y-5`}
                >
                    <div
                        className={`flex flex-col items-center`}
                    >
                        <img className="lg:h-full lg:w-full md:h-3/4 md:w-9/12 sm:h-3/4 sm:w-9/12 rounded-md" src={image} />                        
                    </div>
                    <div className={`flex flex-col items-center pt-2`}>
                        <h4 className=" mb-2 sm:text-sm md:text-lg lg:text-2xl">{name}</h4>
                        <p className="sm:text-sm md:text-lg lg:text-2xl text-gray-400 text-center">{role}</p>
                        <div className="w-3/5 border-b border-gray-400 mt-2"></div>
                        </div>
                </div>
            </div>
        </>
    );
};
