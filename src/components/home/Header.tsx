import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import { RefObject, useEffect, useState } from 'react';

export interface HeaderProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    section1Ref: RefObject<HTMLElement>;
    section2Ref: RefObject<HTMLElement>;
    section3Ref: RefObject<HTMLElement>;
    section4Ref: RefObject<HTMLElement>;
    section5Ref: RefObject<HTMLElement>;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    const { scrollToSection, section1Ref, section2Ref, section3Ref, section4Ref, section5Ref } = props;

    const [isScrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 100;
        if (isScrolled) {
            setScrolled(true);
        } else if (!isScrolled) {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`top-0 fixed w-full z-50 transition-colors duration-500 ${isScrolled ? 'bg-gray-900-transparent shadow-gray-50' : 'bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link to="/" className="block" aria-label="Cruip">
                            <svg className={`w-8 h-8 fill-current ${isScrolled ? 'text-blue-600 hover:text-gray-200' : 'hover:text-blue-600 text-gray-200'}`} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                            </svg>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <Link
                                    to=""
                                    onClick={() => scrollToSection(section1Ref)}
                                    className={`${isScrolled ? 'text-blue-600 hover:text-gray-200' : 'hover:text-blue-600 text-gray-200'} font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    onClick={() => scrollToSection(section2Ref)}
                                    className={`${isScrolled ? 'text-blue-600 hover:text-gray-200' : 'hover:text-blue-600 text-gray-200'} font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out`}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    onClick={() => scrollToSection(section3Ref)}
                                    className={`${isScrolled ? 'text-blue-600 hover:text-gray-200' : 'hover:text-blue-600 text-gray-200'} font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out`}
                                >
                                    Technologies
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    onClick={() => scrollToSection(section4Ref)}
                                    className={`${isScrolled ? 'text-blue-600 hover:text-gray-200' : 'hover:text-blue-600 text-gray-200'} font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out`}
                                >
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    onClick={() => scrollToSection(section5Ref)}
                                    className={`${isScrolled ? 'text-blue-600 hover:text-gray-200' : 'hover:text-blue-600 text-gray-200'} font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <MobileMenu scrollToSection={scrollToSection}
                        section1Ref={section1Ref}
                        section2Ref={section2Ref}
                        section3Ref={section3Ref}
                        section4Ref={section4Ref}
                        section5Ref={section5Ref} />

                </div>
            </div>
        </header>
    );
};
