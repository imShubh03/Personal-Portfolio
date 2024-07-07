import React from 'react'
import { FaBookReader } from "react-icons/fa";
import TimelineData from './TimelineData';
import { FaLaptopCode } from "react-icons/fa";
import html from "../../../public/images/html1.png"


const Education = () => {
    return (
        <section>
            <header>
                <h2 className=' text-white text-2xl'>Education</h2>
            </header>
            <div className=' timeline mt-5'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <FaBookReader />
                    </div>
                    <h3 className=' text-white font-semibold text-xl'>My Education</h3>
                </div>
                <div className=' ml-6 space-y-0'>
                    <TimelineData
                        title="Shri guru gobind singhji instititur of techmology"
                        date="2021=2025"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                    />
                    <TimelineData
                        title="Shri guru gobind singhji instititur of techmology"
                        date="2021=2025"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                    />
                    <TimelineData
                        title="Shri guru gobind singhji instititur of techmology"
                        date="2021=2025"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                    />
                </div>
            </div>
            {/* skills */}
            <div>
                <header>
                    <h3 className='text-white text-2xl ml-3 mb-3'>Skills</h3>
                </header>
                <div className=' flex flex-col'>
                    <div className='title-wrapper flex space-x-2'>
                        <div className='icon-box'>
                            <FaLaptopCode />
                        </div>
                        <h3 className=' text-white font-semibold text-xl py-1'>Frontend</h3>
                    </div>
                    <div className=' flex space-x-2 mt-3 mx-3'>
                        <img
                            className="w-20 h-20 rounded"
                            src={html}
                            alt="Large avatar"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src={html}
                            alt="Large avatar"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src={html}
                            alt="Large avatar"
                        />
                    </div>

                    <div className='title-wrapper flex space-x-2'>
                        <div className='icon-box'>
                            <FaLaptopCode />
                        </div>
                        <h3 className=' text-white font-semibold text-xl py-1'>Frontend</h3>
                    </div>
                    <div className=' flex space-x-2 mt-3 mx-3'>
                        <img
                            className="w-20 h-20 rounded"
                            src={html}
                            alt="Large avatar"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src={html}
                            alt="Large avatar"
                        />
                        <img
                            className="w-20 h-20 rounded"
                            src={html}
                            alt="Large avatar"
                        />
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Education