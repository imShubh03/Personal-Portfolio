import React, { useEffect, useState } from 'react';
import { FaLink } from "react-icons/fa";
import Copyright from '../../components/Copyright';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => {
            setProjects(data);
            setFilteredProjects(data);
        });
    }, []);

    const handleFilter = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(project => project.category === category);
            setFilteredProjects(filtered);
        }
    };

    return (
        <section>
            <header>
                <h3 className='text-white text-3xl ml-3 mb-7 underline'>Projects</h3>
            </header>
            {/* filter buttons */}
            <ul className='flex justify-start items-center gap-[25px] pl-[5px] mb-[30px]'>
                {['All', 'Web Application', 'Machine Learning', 'DSA'].map(category => (
                    <li key={category} className='filter-item text-white '>
                        <button
                            className={category === selectedCategory ? 'active' : ''}
                            onClick={() => handleFilter(category)}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            {/* display data */}
            <section className='projects'>
                <ul className='grid grid-cols-1 gap-[30px] mb-[10px] md:grid-cols-2 lg:grid-cols-3'>
                    {filteredProjects.map(project => (
                        <li key={project.id} className='project-item active'
                            data-category={project.category} data-filter-item
                        >
                            <a href={project.url}>
                                <figure className='project-img '>
                                    <div className='project-item-icon-box'>
                                        <FaLink />
                                    </div>
                                    <img src={project.images} alt={project.title} loading='lazy' />
                                </figure>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-category'>{project.category}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <hr />

            <div>
                <Copyright />
            </div>
        </section>
    );
}

export default Portfolio;
