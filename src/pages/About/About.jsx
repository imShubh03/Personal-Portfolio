import React from "react";
import Service from "./Service";

const serviceData = [
    {
        "title": "Web Development",
        "icon": "/images/coding.png",
        "description": "Creating responsive and modern websites using the latest web technologies."
    },
    {
        "title": "Graphic Design",
        "icon": "/images/ux.png",
        "description": "Designing visually appealing graphics and layouts for web and print media."
    },
    {
        "title": "SEO Optimization",
        "icon": "/images/seo.png",
        "description": "Improving website visibility on search engines through effective SEO strategies."
    },
    {
        "title": "Digital Marketing",
        "icon": "/images/social.png",
        "description": "Implementing comprehensive digital marketing campaigns to enhance online presence and engagement."
    }
];

function About() {
    return (
        <div className="about active">
            <header>
                <h2 className="text-2xl text-white mb-4 px-3 mt-2">About Me</h2>
            </header>

            <section className="text-gray-300 text-sm font-normal">
                <p className="mb-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
                    accusamus asperiores facilis. Officia repellendus asperiores odio.
                    Error asperiores numquam debitis voluptatem maxime facere rem
                    voluptatum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid iure
                    debitis similique ullam, quod perferendis illo sapiente vel quisquam
                    natus voluptatum architecto deserunt ipsam nisi id nesciunt temporibus
                    sit assumenda? Odio numquam saepe repudiandae officiis dolor mollitia
                    doloremque itaque earum!
                </p>
            </section>

            <section className="mb-9">
                <h2 className="h3 mb-5">My work</h2>
                <ul className="service-list">
                    {
                        serviceData.map((service, index) => (
                            <Service key={index} title={service.title} icon={service.icon} description={service.description} />
                        ))
                    }
                </ul>
            </section>



        </div>
    );
}

export default About;
