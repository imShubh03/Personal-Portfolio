import React, { useState } from 'react';
import { Mail, User, Send } from 'lucide-react';
import Copyright from '../../components/Copyright';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl xl:max-w-5xl w-full space-y-8 bg-gray-800 shadow-2xl rounded-3xl p-10 lg:p-14 border border-gray-700 transform transition-all hover:scale-[1.02]">
                <div className="text-left">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                        Contact Me
                    </h2>
                    <p className="mt-2 text-sm lg:text-base text-gray-400">
                        Got a question? I'd love to hear from you. Send me a message.
                    </p>
                </div>
                
                <form 
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-6 lg:space-y-8"
                >
                    {/* Hidden input for Web3Forms */}
                    <input
                        type="hidden"
                        name="access_key"
                        value="adda50b6-d06e-4f9a-9dff-2db7f64f6766"
                    />

                    {/* Honeypot field */}
                    <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: 'none' }}
                    />

                    <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                            <label className="block mb-2 text-sm lg:text-base font-medium text-gray-300 flex items-center">
                                <User className="mr-2 text-cyan-500" size={20} />
                                First Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John"
                                required
                                className="w-full px-4 py-2.5 lg:py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors duration-300 ease-in-out"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm lg:text-base font-medium text-gray-300 flex items-center">
                                <User className="mr-2 text-cyan-500" size={20} />
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Doe"
                                required
                                className="w-full px-4 py-2.5 lg:py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors duration-300 ease-in-out"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm lg:text-base font-medium text-gray-300 flex items-center">
                            <Mail className="mr-2 text-cyan-500" size={20} />
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john.doe@example.com"
                            required
                            className="w-full px-4 py-2.5 lg:py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors duration-300 ease-in-out"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm lg:text-base font-medium text-gray-300 flex items-center">
                            <Send className="mr-2 text-cyan-500" size={20} />
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            required
                            rows={5}
                            className="w-full px-4 py-2.5 lg:py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-colors duration-300 ease-in-out resize-none"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center items-center px-6 py-3.5 lg:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg lg:text-xl rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 ease-in-out transform active:scale-[0.98]"
                        >
                            <Send className="mr-2" size={20} />
                            Send Message
                        </button>
                    </div>
                </form>

                <div className="text-center pt-4 border-t border-gray-700">
                    <Copyright />
                </div>
            </div>
        </div>
    );
}

export default Contact;
