import React from "react";
import { GiMailbox, GiPhone } from "react-icons/gi";
import { MdOutlineContactPage } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import Socials from "./Socials";

const Aside = () => {
    return (
        <div className="w-full">
            {/* Mobile & Tablet Horizontal Layout */}
            <div className="lg:hidden bg-[#1A1A2E] text-white flex items-center p-4 rounded-2xl shadow-2xl">
                {/* Profile Image */}
                <div className="w-32 h-32 flex-shrink-0 mr-4">
                    <div className="relative w-full h-full">
                        <img
                            src="/images/us.jpg"
                            alt="Shubham Sonake"
                            className="w-full h-full object-cover rounded-full border-4 border-[#16213E]"
                        />
                    </div>
                </div>

                {/* Mobile Content Container */}
                <div className="flex-grow">
                    {/* Name and Title */}
                    <div className="mb-2">
                        <h1 className="text-xl font-bold">
                            Shubham Sonake
                        </h1>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                            Fullstack Developer
                        </p>
                    </div>

                    {/* Contact Information Vertical Stack */}
                    <div className="space-y-2">
                        {/* Resume */}
                        <a
                            target="_blank"
                            href="https://drive.google.com/file/d/1koWb0637YoMPOvTPyq_9aNatRrBzIpV_/view?usp=drivesdk"
                            className="inline-flex items-center space-x-2 bg-[#16213E] px-2 py-1 rounded-lg hover:bg-[#0F3460] transition-colors group"
                        >
                            <div className="bg-blue-600 p-1 rounded-full group-hover:scale-110 transition-transform">
                                <MdOutlineContactPage className="w-4 h-4 text-white" />
                            </div>
                            <p className="font-semibold text-white text-xs">Resume</p>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:shubhamsonake307@gmail.com"
                            className="inline-flex items-center space-x-2 bg-[#16213E] px-2 py-1 rounded-lg hover:bg-[#0F3460] transition-colors group"
                        >
                            <div className="bg-green-600 p-1 rounded-full group-hover:scale-110 transition-transform">
                                <GiMailbox className="w-4 h-4 text-white" />
                            </div>
                            <p className="font-semibold text-white text-xs">Email</p>
                        </a>

                        {/* Coding Profiles */}
                        <a
                            href="https://linktr.ee/shubh03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-[#16213E] px-2 py-1 rounded-lg hover:bg-[#0F3460] transition-colors group"
                        >
                            <div className="bg-red-600 p-1 rounded-full group-hover:scale-110 transition-transform">
                                <GiLinkedRings className="w-4 h-4 text-white" />
                            </div>
                            <p className="font-semibold text-white text-xs">Profiles</p>
                        </a>

                        {/* Phone */}
                        <a
                            href="tel:+91-8208364674"
                            className="inline-flex items-center space-x-2 bg-[#16213E] px-2 py-1 rounded-lg hover:bg-[#0F3460] transition-colors group"
                        >
                            <div className="bg-purple-600 p-1 rounded-full group-hover:scale-110 transition-transform">
                                <GiPhone className="w-4 h-4 text-white" />
                            </div>
                            <p className="font-semibold text-white text-xs">Phone</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Large Screen Vertical Layout */}
            <div className="hidden lg:block bg-transparent w-full max-w-sm mx-auto">
                <div className="bg-[#1A1A2E] text-white rounded-2xl overflow-hidden shadow-2xl w-full">
                    {/* Large Profile Image Section */}
                    <div className="relative h-64 w-full">
                        <img
                            src="/images/us.jpg"
                            alt="Shubham Sonake"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                                Shubham Sonake
                            </h1>
                            <p className="text-sm text-gray-200 uppercase tracking-wider">
                                Fullstack Developer
                            </p>
                        </div>
                    </div>

                    {/* Contact and Social Section */}
                    <div className="p-6 space-y-6">
                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm text-gray-400 uppercase mb-4 text-center">
                                Connect with Me
                            </h3>
                            <div className="flex justify-center space-x-4">
                                <Socials />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-4">
                            {/* Resume */}
                            <a
                                target="_blank"
                                href="https://drive.google.com/file/d/1koWb0637YoMPOvTPyq_9aNatRrBzIpV_/view?usp=drivesdk"
                                className="flex items-center space-x-4 bg-[#16213E] p-3 rounded-lg hover:bg-[#0F3460] transition-colors group"
                            >
                                <div className="bg-blue-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                                    <MdOutlineContactPage className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Resume</p>
                                    <p className="text-xs text-gray-400">View My CV</p>
                                </div>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:shubhamsonake307@gmail.com"
                                className="flex items-center space-x-4 bg-[#16213E] p-3 rounded-lg hover:bg-[#0F3460] transition-colors group"
                            >
                                <div className="bg-green-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                                    <GiMailbox className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Email</p>
                                    <p className="text-xs text-gray-400 break-all">
                                        shubhamsonake307@gmail.com
                                    </p>
                                </div>
                            </a>

                            {/* coding profiles */}
                            <a
                                href="https://linktr.ee/shubh03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-4 bg-[#16213E] p-3 rounded-lg hover:bg-[#0F3460] transition-colors group"
                            >
                                <div className="bg-red-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                                    <GiLinkedRings className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Profiles</p>
                                    <p className="text-xs text-gray-400">All my Coding Profiles</p>
                                </div>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+91-8208364674"
                                className="flex items-center space-x-4 bg-[#16213E] p-3 rounded-lg hover:bg-[#0F3460] transition-colors group"
                            >
                                <div className="bg-purple-600 p-2 rounded-full group-hover:scale-110 transition-transform">
                                    <GiPhone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Phone</p>
                                    <p className="text-xs text-gray-400">+91-8208364674</p>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aside;