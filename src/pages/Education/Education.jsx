import React from 'react';
import { FaBookReader, FaLaptopCode } from 'react-icons/fa';
import TimelineData from './TimelineData';

const Education = () => {
    const skillSections = [
        {
            title: "Programming Languages",
            skills: [
                { name: "C", icon: "https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle.png" },
                { name: "C++", icon: "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png" },
                { name: "Java", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBn3Fywm9Ee6lNYe7MblsDJuxH6l15wtiNZg&s" },
                { name: "Python", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFxLTtL-3bwkqRcHTbWfXYGG8yPHIDn_9vg&s" },
                { name: "JavaScript", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR039eLKKd8V-_0NSsMFfZ9AlEVvPNFOLfazQ&s" },
            ],
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "HTML", icon: "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" },
                { name: "CSS", icon: "data:image/png;base64,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" },
                { name: "React", icon: "https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png" },
                { name: "Node.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrLYQhtjfXWTmPIcyl_Xc7ro0C-NaLujjQg&s" },
                { name: "Express.js", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtkTUrFUZAYIRQmYHiXPi44KI-lwfF-kqUA&s" },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: "https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png" },
                { name: "MongoDB", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGo5WeIPga0G_6K908bTkEcwWuSZ38DT3sA&s" },
            ],
        },
        {
            title: "Developer Tools",
            skills: [
                { name: "Git", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZgjTI7nRojCdU8B4_gSZ3GPHZZJcUJeSAQ&s" },
                { name: "GitHub", icon: "https://i.pinimg.com/736x/30/b1/50/30b150cd489202db131009ac9540cec0.jpg" },
                { name: "Postman", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqasB3j7B3_MC7Bu2-cpKqwTfaXhHzhSDng&s" },
            ],
        },
    ];

    return (
        <section className="bg-gray-900 text-white p-10 rounded-lg shadow-lg">
            <header className="mb-10">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-400 pb-4">
                    <FaBookReader className="inline-block mr-3" />
                    Education Journey
                </h2>
            </header>

            <div className="space-y-6 mb-10">
                <TimelineData
                    title="Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded"
                    date="2021-2025"
                    description="Bachelor of Technology in Information Technology with a CGPA of 7.41"
                    link="https://drive.google.com/file/d/1-l2Nif3V1kJoPRcrRLOukN0y53jvK1wR/view?usp=drive_link"
                />
                <TimelineData
                    title="Sangameshwar College of Science, Solapur"
                    date="2019-2021"
                    description="Higher Secondary Certificate (HSC) with a percentage of 93.17%."
                    link="https://drive.google.com/file/d/1zZg6Wb9FxBebGkzCXy-a-WfqWBm23nTg/view?usp=drive_link"
                />
                <TimelineData
                    title="Shanti English Medium School, Solapur"
                    date="2019-Passout"
                    description="Secondary School Certificate (SSC) with a percentage of 86.40%."
                    link="https://drive.google.com/file/d/1octxsWRIoUdIeNzSJ5PXKe9emQUp1QGw/view?usp=drive_link"
                />
            </div>

            <header className="mb-8">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-400 pb-4">
                    <FaLaptopCode className="inline-block mr-3" />
                    Technical Skills
                </h2>
            </header>

            {skillSections.map((section, index) => (
                <div key={index} className="mb-10">
                    <h3 className="text-lg font-semibold text-blue-500 mb-4">{section.title}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {section.skills.map((skill, skillIndex) => (
                            <div
                                key={skillIndex}
                                className="bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-14 h-14 mb-3 object-contain"
                                />
                                <span className="text-sm text-gray-300">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Education;
