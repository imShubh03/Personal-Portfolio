import React from "react";
import Service from "./Service";

const serviceData = [
    {
        title: "Web Development",
        icon: "/images/coding.png",
        description: "Creating responsive and modern websites using the latest web technologies."
    },
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
        title: "Machine Learning",
        icon: "/images/social.png",
        description: "Developing machine learning models using various algorithms to create intelligent systems and solutions."
    }
];


function About() {
    return (
        <div className="about active">
            <header>
                <h2 className="text-3xl text-white mb-4 px-3 mt-2 underline">About Me</h2>
            </header>

            <section className="text-gray-300 text-lg space-y-5">
                <p >
                    Hey there! 👋 <span className="text-2xl font-bold text-blue-500" >I'm Shubham Sonake ,</span> a Software Developer and Freelancer hailing from India, ready to ignite the tech scene! 💥 From idea conception to successful launch, I'm your go-to guy! I thrive on the adrenaline rush of coding competitions and hackathons, constantly pushing boundaries and thinking outside the box. 🚀
                </p>

                <p >
                    <span className=" text-xl text-blue-500 underline" style={{display:'block'}}>My passion? </span> Designing and building everything from sleek websites 🌐 to fully functional products. I love diving into new technologies 🛠️ and mastering them to stay at the cutting edge of development. Whether it’s experimenting with the latest frameworks or tackling complex coding challenges, I’m always eager to expand my skill set. 🧩💻
                </p>
                <p>
                    I'm also deeply passionate about problem-solving 🧠 and competitive programming. 🏆🔍 I enjoy solving complex problems and participating in coding contests, which keeps me sharp and ready for any challenge that comes my way.
                </p>
            </section>
            <hr />

            <section className="mb-9">
                <h2 className="text-4xl mb-5 text-white underline">What I do?</h2>
                <ul className="service-list">
                    {serviceData.map((service, index) => (
                        <Service
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default About;
