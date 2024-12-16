import React from 'react';

const Copyright = () => (
    <div className="text-center my-3">
        <p className="text-white">
            &copy; {new Date().getFullYear()} - Made with 
            <span role="img" aria-label="love" className="mx-1">💚</span>
        </p>
    </div>
);

export default Copyright;
