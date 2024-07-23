import React from 'react';

function Contact() {
    return (
        <section className='contact'>
            <header>
                <h3 className='text-white text-2xl ml-3 mb-3'>Contact Me</h3>
            </header>
            <section>
                <div className="container px-6 py-12 mx-auto">
                    <div className="p-4 py-6 rounded-lg md:p-8">
                        <form
                            action="https://api.web3forms.com/submit"
                            method="POST"
                        >
                            {/* Replace with your Access Key */}
                            <input
                                type="hidden"
                                name="access_key"
                                value="adda50b6-d06e-4f9a-9dff-2db7f64f6766"
                            />

                            {/* Form Inputs. Each input must have a name="" attribute */}
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="First Name"
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your email"
                                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required
                                />
                            </div>

                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="say hi👋"
                                    required
                                />
                            </div>

                            {/* Honeypot Spam Protection */}
                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                style={{ display: 'none' }}
                            />

                            {/* Custom Confirmation / Success Page */}
                            {/* <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> */}

                            <button
                                type="submit"
                                className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Contact;
