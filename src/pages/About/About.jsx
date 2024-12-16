import React from "react";
import Copyright from "../../components/Copyright";

const serviceData = [
    {
        title: "Frontend Development",
        icon: "/images/ux.png",
        description: "Developing the frontend of websites and applications to ensure an engaging and user-friendly interface."
    },
    {
        title: "Backend Development",
        icon: "/images/seo.png",
        description: "Building and maintaining the backend systems of applications, including servers, databases, and APIs."
    },
    {
        title: "Problem Solving",
        icon: "/images/coding.png",
        description: "Applying advanced algorithms and data structures to efficiently solve complex computational problems."
    },
    {
        title: "Machine Learning",
        icon: "/images/social.png",
        description: "Developing machine learning models using various algorithms to create intelligent systems and solutions."
    }
];

function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-1 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
                <header className="p-8 border-b text-left border-gray-700">
                    <h2 className="text-4xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2">
                        About Me
                    </h2>
                    <p className="text-gray-400 text-lg">Software Developer | Problem Solver | Tech Enthusiast</p>
                </header>

                <section className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed">
                                Hey there! 👋 <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">I'm Shubham Sonake</span>, a Software Developer from India. 💥
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                From idea to launch, I transform concepts into powerful tech solutions. I embrace the "kintsugi" philosophy—turning challenges into opportunities. My passion drives me through coding competitions and innovative projects! 🚀
                            </p>
                        </div>
                        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600 shadow-inner">
                            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                A Bit About Myself
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Passionate about innovative solutions
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Competitive programming enthusiast
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 10l-2.293 2.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Continuous learner in tech ecosystem
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="p-8 bg-gray-800/50">
                    <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        What I Do
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {serviceData.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full"
                            >
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="mb-4 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                                        <img
                                            src={service.icon}
                                            alt={service.title}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="p-6 text-center border-t border-gray-700">
                    <Copyright />
                </footer>
            </div>
        </div>
    );
}

export default About;