import React from 'react'

function TimelineData({ title, date, description, link }) {
    return (
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className=" ms-6 space-y-3">
                <span className="absolute flex items-center justify-center w-5 h-5 bg-green-600 rounded-full -start-3 ring-8 ring-orange dark:ring-green-600 dark:bg-green-600">
                    <svg
                        className="w-2.5 h-2.5 text-blue-800 bg-pink-700 dark:text-blue-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500 italic">
                    {date}
                </time>
                <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">
                    {description}
                </p>
            </li>
        </ol>
    )
}

export default TimelineData
