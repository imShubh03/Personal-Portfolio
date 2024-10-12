import React from "react";
import Service from "./Service";
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
        <div className="about active">
            <header>
                <h2 className="text-3xl text-white mb-4 px-3 mt-2 underline">About Me</h2>
            </header>

            <section className="text-gray-300 text-lg space-y-5 mb-4">
                <p >
                    Hey there! 👋 <span className="text-2xl font-bold text-green-500" >I'm Shubham Sonake ,</span> a Software Developer hailing from India. 💥 From the time of the idea first coming to mind to the point when the launch turned out to be a success, I'm the person you should consult when anything comes to technology! I love to punch the "kintsugi" effect into my life. It means not being afraid to try to fix my mistakes rather making them work in my favor. I am adrenaline-driven when it comes to coding competitions and hackathons, which is impossible for me not to exceed deadlines and think of other solutions. 🚀
                </p>

                <p >
                    <span className=" text-xl text-green-500 underline" style={{ display: 'block' }}>My passion? </span> Designing stylish websites 🌐 and constructing robust products are my true love. My new discovered engagement with the technology at its highest form of creative mastery accounts for competitive ranking in the field. Even if you are testing new frameworks or solving difficult coding problems, I am still confident in gaining new expertise. 🧩💻
                </p>
                <p>
                    In addition to that, I focus on the ways of problem-solving 🧠 that's of me being crazy about competition programming, 🏆🔍 however, my passion is beyond the pale. Therefore, I am challenged by the problems I solve, and in addition, is another thing that, whether in a contest or some other event, does its part to keep me on my toes, and on point. This is the fortress of my ability to quickly capture concepts and find solutions to life's various challenges.
                </p>
            </section>
            <hr />

            <section className="mb-9 mt-4">
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

            <hr />
            <div>
                <Copyright />
            </div>

        </div>
    );
}

export default About;
