import Tech1 from "../assets/images/tech1.png"
import Tech2 from "../assets/images/tech2.png"
import Tech3 from "../assets/images/tech3.png"
import Tech4 from "../assets/images/tech4.png"
import Tech5 from "../assets/images/tech5.png"
import Tech6 from "../assets/images/tech6.png"
import { TechItem } from "./technologyItem"
export const Technologies: React.FC = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Technologies</h2>
                        <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-8 grid-cols-2  md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

                        {/* 1st item */}
                        <TechItem
                            image={Tech1}
                        />

                        {/* 2nd item */}
                        <TechItem
                            image={Tech2}
                        />

                        {/* 3rd item */}
                        <TechItem
                            image={Tech3}
                        />

                        {/* 4th item */}
                        <TechItem
                            image={Tech4}
                        />

                        {/* 5th item */}
                        <TechItem
                            image={Tech5}
                        />
                        {/* 6th item */}
                        <TechItem
                            image={Tech6}
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};