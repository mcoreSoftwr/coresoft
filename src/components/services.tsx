import { ServiceItem } from "./servicesItem"
import Service1 from "../assets/images/service1.png"
import Service2 from "../assets/images/service2.png"
import Service3 from "../assets/images/service3.png"
import Service4 from "../assets/images/service4.png"
import Service5 from "../assets/images/service5.png"
import Service6 from "../assets/images/service6.png"
import { SectionProps } from "../pages/Home"

export const Services: React.FC<SectionProps> = (props: SectionProps) => {
    const { sectionRef } = props;

    return (
        <section ref={sectionRef}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Our Services</h2>
                        <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    {/* Items */}
                    <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

                        {/* 1st item */}
                        <ServiceItem
                            key={Service1}
                            icon={Service1}
                            title="Web Development"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        />

                        {/* 2nd item */}
                        <ServiceItem
                            key={Service2}
                            icon={Service2}
                            title="Design"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        />

                        {/* 3rd item */}
                        <ServiceItem
                            key={Service3}
                            icon={Service3}
                            title="NetWorking"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        />

                        {/* 4th item */}
                        <ServiceItem
                            key={Service4}
                            icon={Service4}
                            title="SEO Services"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        />

                        {/* 5th item */}
                        <ServiceItem
                            key={Service5}
                            icon={Service5}
                            title="Digital Identity"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        />

                        <ServiceItem
                            key={Service6}
                            icon={Service6}
                            title="E-Commerce"
                            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat."
                        />

                    </div>

                </div>
            </div>
        </section>
    );
};