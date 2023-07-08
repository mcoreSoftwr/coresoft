
interface TechnologyItem {
    image:string
}

export const TechItem: React.FC<TechnologyItem> = (props) => {

    const { image } = props;
    return (
        <>
            <div
                className={`relative`}
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-blocks]"
            >
                <div
                    className={``}
                >
                    <div
                        className={`flex flex-col items-center`}
                    >
                    <img className="lg:h-full lg:w-full md:h-3/4 md:w-9/12 h-3/4 w-9/12" src={image}/>
                    </div>
                </div>
            </div>
        </>
    );
};
