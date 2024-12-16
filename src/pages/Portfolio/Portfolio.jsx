import React, { useEffect, useState } from 'react';
import { FaLink, FaFilter } from "react-icons/fa";
import Copyright from '../../components/Copyright';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setFilteredProjects(data);
            })
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered);
        }
        setIsFilterOpen(false);
    };

    return (
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen p-6 md:p-12">
            <div className="container mx-auto">
                {/* Header */}
                <header className="mb-10">
                    <h3 className='
                        text-4xl font-bold tracking-wide 
                        bg-gradient-to-r from-green-400 to-emerald-600
                        text-transparent bg-clip-text
                        inline-block
                        pb-2 
                        border-b-4 border-green-500
                    '>
                        My Projects
                    </h3>
                </header>

                {/* Mobile Filter Toggle */}
                <div className="md:hidden mb-6">
                    <button 
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <FaFilter />
                        Filter Projects
                    </button>
                </div>

                {/* Filter buttons */}
                <ul className={`
                    ${isFilterOpen ? 'block' : 'hidden'} md:flex 
                    justify-start items-center gap-6 mb-10 bg-gray-800 
                    md:bg-transparent p-4 md:p-0 rounded-lg
                `}>
                    {['All', 'Web Application', 'Machine Learning', 'DSA'].map(category => (
                        <li key={category} className='mb-2 md:mb-0'>
                            <button
                                className={`
                                    w-full md:w-auto text-left md:text-center
                                    px-4 py-2 rounded-lg transition duration-300
                                    ${selectedCategory === category 
                                        ? 'bg-blue-600 text-white' 
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
                                `}
                                onClick={() => handleFilter(category)}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Projects Grid */}
                <section className='projects'>
                    <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        {filteredProjects.map(project => (
                            <li 
                                key={project.id} 
                                className='
                                    transform transition duration-300 
                                    hover:scale-105 hover:shadow-2xl 
                                    bg-gray-800 rounded-xl overflow-hidden 
                                    border border-gray-700
                                '
                            >
                                <a 
                                    href={project.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='block relative group'
                                >
                                    <div className='relative overflow-hidden'>
                                        <img 
                                            src={project.images} 
                                            alt={project.title} 
                                            loading='lazy'
                                            className='w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110'
                                        />
                                        <div className='
                                            absolute inset-0 bg-blue-600 bg-opacity-0 
                                            group-hover:bg-opacity-30 
                                            flex items-center justify-center 
                                            transition-all duration-300
                                        '>
                                            <div className='
                                                opacity-0 group-hover:opacity-100 
                                                text-white text-3xl 
                                                transition-opacity duration-300
                                            '>
                                                <FaLink />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-6'>
                                        <h3 className='text-xl font-semibold text-white mb-2'>
                                            {project.title}
                                        </h3>
                                        <p className='text-gray-400 text-sm'>
                                            {project.category}
                                        </p>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* No Projects Found */}
                {filteredProjects.length === 0 && (
                    <div className='text-center text-gray-500 mt-10'>
                        No projects found in this category.
                    </div>
                )}

                <hr className='border-gray-700 my-12'/>

                <Copyright />
            </div>
        </section>
    );
}

export default Portfolio;