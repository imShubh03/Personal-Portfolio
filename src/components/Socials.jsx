import React from 'react'

function Socials() {
    return (
        <>
            <ul className="social-list flex flex-wrap">
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/shubham-sonake-410241231" className="social-link">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://github.com/imShubh03" className="social-link">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://x.com/Shubham3102003?s=08" className="social-link">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Socials