import Prof1 from "../assets/images/prof1.jpg"
import Prof2 from "../assets/images/prof2.jpg"
import Prof3 from "../assets/images/prof3.jpg"
import Prof4 from "../assets/images/prof4.jpg"

import { ProfItem } from "./professionalItem"
export const Team: React.FC = () => {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Behind The People</h2>
                        <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-8 grid-cols-2  md:grid-cols-2 lg:grid-cols-4 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

                        {/* 1st item */}
                        <ProfItem
                            image={Prof1}
                            name="Pepito Perez"
                            role="CEO"
                        />

                        {/* 2nd item */}
                        <ProfItem
                            image={Prof2}
                            name="Pablito Escobar"
                            role="Designer"
                        />

                        {/* 3rd item */}
                        <ProfItem
                            image={Prof3}
                            name="Gonzalo Guzman"
                            role="Developer"
                        />

                        {/* 4th item */}
                        <ProfItem
                            image={Prof4}
                            name="Rosario Tijeras"
                            role="Manager"
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};