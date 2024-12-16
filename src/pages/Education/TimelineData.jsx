import React from 'react';
import { FaCalendarAlt, FaLink } from 'react-icons/fa';

const TimelineData = ({ title, date, description, link }) => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400">
                    {title}
                </h4>
                <div className="flex items-center text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    <span className="text-sm">{date}</span>
                </div>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
        </div>
    );
};

export default TimelineData;
