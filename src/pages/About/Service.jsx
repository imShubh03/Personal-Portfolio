import React from 'react'

const Service = ({title, icon, description}) => {
    return (
        <li className='service-item bg-slate-800 text-white font-semibold'>
            <div className='service-icon-box'>
                <img src={icon} alt="" width={60} />
            </div>
            <div className='service-content-box'>
                <h4 className='h4 service-item-title text-lg'>{title}</h4>
                <p className='service-item-text text-base'>{description}</p>
            </div>
        </li>
    )
}

export default Service