import React from 'react'
import { FaBookReader, FaLaptopCode } from "react-icons/fa";
import TimelineData from './TimelineData';
import Copyright from '../../components/Copyright';


const Education = () => {
    return (
        <section>
            <header>
                <h2 className='text-white text-3xl underline'>Education</h2>
            </header>
            <div className='timeline mt-5'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <FaBookReader />
                    </div>
                    <h3 className='text-white font-semibold text-xl'>My Journey so for</h3>
                </div>
                <div className='ml-6 space-y-4'>
                    <TimelineData
                        title="Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded"
                        date="2021-2025"
                        description="Bachelor of Technology in Information Technology with a CGPA of 7.18."
                        link="https://drive.google.com/file/d/1-l2Nif3V1kJoPRcrRLOukN0y53jvK1wR/view?usp=drive_link" // Replace with the actual link
                    />
                    <TimelineData
                        title="Sangameshwar College of Science, Solapur"
                        date="2019-2021"
                        description="Higher Secondary Certificate (HSC) with a percentage of 93.17%."
                        link="https://drive.google.com/file/d/1zZg6Wb9FxBebGkzCXy-a-WfqWBm23nTg/view?usp=drive_link" // Replace with the actual link
                    />
                    <TimelineData
                        title="Shanti English Medium School, Solapur"
                        date="2019-Passout"
                        description="Secondary School Certificate (SSC) with a percentage of 86.40%"
                        link="https://drive.google.com/file/d/1octxsWRIoUdIeNzSJ5PXKe9emQUp1QGw/view?usp=drive_link" // Replace with the actual link
                    />
                </div>
            </div>

            <hr />

            {/* skills */}
            <div className=' mt-4'>
                <header>
                    <h3 className='text-white text-3xl ml-3 mb-3 underline'> My Skills</h3>
                </header>
                <div className='flex flex-col space-y-7'>
                    <div className='title-wrapper flex space-x-2'>
                        <div className='icon-box'>
                            <FaLaptopCode />
                        </div>
                        <h3 className='text-white font-semibold text-xl py-1'>Programming Languages</h3>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-3 mx-3'>
                        <img
                            className="w-20 h-20 rounded"
                            src="https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle.png"
                            alt="c"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png"
                            alt="cpp"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBn3Fywm9Ee6lNYe7MblsDJuxH6l15wtiNZg&s"
                            alt="Java"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFxLTtL-3bwkqRcHTbWfXYGG8yPHIDn_9vg&s"
                            alt="python"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR039eLKKd8V-_0NSsMFfZ9AlEVvPNFOLfazQ&s"
                            alt="javascript"
                        />
                    </div>
                    <div className='title-wrapper flex space-x-2'>
                        <div className='icon-box'>
                            <FaLaptopCode />
                        </div>
                        <h3 className='text-white font-semibold text-xl py-1'>Web Technologies</h3>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-3 mx-3'>
                        <img
                            className="w-20 h-20 rounded"
                            src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png"
                            alt="HTML"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZwFtjVR3y_SCgYqplC4PtA3Cuyhk-J_ZeQ&s"
                            alt="CSS"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://static.javatpoint.com/tutorial/reactjs/images/reactjs-tutorial.png"
                            alt="JavaScript"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrLYQhtjfXWTmPIcyl_Xc7ro0C-NaLujjQg&s"
                            alt="Node.js"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNtkTUrFUZAYIRQmYHiXPi44KI-lwfF-kqUA&s"
                            alt="Express.js"
                        />
                    </div>

                    <div className='title-wrapper flex space-x-2'>
                        <div className='icon-box'>
                            <FaLaptopCode />
                        </div>
                        <h3 className='text-white font-semibold text-xl py-1'>Databases</h3>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-3 mx-3'>
                        <img
                            className="w-20 h-20 rounded"
                            src="https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png"
                            alt="mysql"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGo5WeIPga0G_6K908bTkEcwWuSZ38DT3sA&s"
                            alt="mongodb"
                        />
                    </div>

                    <div className='title-wrapper flex space-x-2'>
                        <div className='icon-box'>
                            <FaLaptopCode />
                        </div>
                        <h3 className='text-white font-semibold text-xl py-1'>Developer Tools</h3>
                    </div>
                    <div className='flex flex-wrap gap-4 mt-3 mx-3'>
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZgjTI7nRojCdU8B4_gSZ3GPHZZJcUJeSAQ&s"
                            alt="git"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://i.pinimg.com/736x/30/b1/50/30b150cd489202db131009ac9540cec0.jpg"
                            alt="github"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkqasB3j7B3_MC7Bu2-cpKqwTfaXhHzhSDng&s"
                            alt="postman"
                        />
                    </div>
                </div>
            </div>

            <hr className=' mt-8'/>

            <div>
                <Copyright />
            </div>
        </section>
    )
}

export default Education
