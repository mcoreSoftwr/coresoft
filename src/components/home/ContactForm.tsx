import { ChangeEvent, FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faBuilding, faGlobe, faMapMarkerAlt, faComments } from '@fortawesome/free-solid-svg-icons';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        country: '',
        city: '',
        companyName: '',
        message: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar los datos del formulario
        console.log(formData);
    };

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Get in touch</h2>
                        <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className="relative">
                                    <span className="absolute left-0 top-0 h-full flex items-center pl-3">
                                        <FontAwesomeIcon icon={faUser} className="mr-2 text-gray-500" />
                                    </span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nombre"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className="relative">
                                    <span className="absolute left-0 top-0 h-full flex items-center pl-3">
                                        <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-500" />
                                    </span>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        placeholder="Número de Teléfono"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        required
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>

                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className="relative">
                                    <span className="absolute left-0 top-0 h-full flex items-center pl-3">
                                        <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-500" />
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Correo Electrónico"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-wrap -mx-3 mb-6'>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className="relative">
                                    <span className="absolute left-0 top-0 h-full flex items-center pl-3">
                                        <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-500" />
                                    </span>
                                    <input
                                        type="text"
                                        name="country"
                                        placeholder="País"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        required
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className='relative'>
                                <span className="absolute left-0 top-0 h-full flex items-center pl-3">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-gray-500" />
                                    </span>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Ciudad"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                />
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <div className='relative'>
                                <span className="absolute left-0 top-0 h-full flex items-center pl-3">
                                        <FontAwesomeIcon icon={faBuilding} className="mr-2 text-gray-500" />
                                    </span>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Nombre de la Empresa"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    required
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 pl-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <textarea
                                    name="message"
                                    placeholder="Mensaje"
                                    value={formData.message}
                                    onChange={handleTextareaChange}
                                    required
                                    rows={5}
                                    maxLength={4000}
                                    className="resize-none appearance-none block h-auto w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                ></textarea>
                            </div>
                        </div>
                    </form>
                    <div className="flex justify-center">
                        <button
                            type='submit'
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ContactForm;