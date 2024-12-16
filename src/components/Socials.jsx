import React from 'react'
import { 
    Linkedin,
    Github,
    Twitter,
    Instagram
} from 'lucide-react'

function Socials() {
    const iconProps = {
        size: 24,  // Adjust size as needed
        strokeWidth: 2,
        className: "text-current" // This will make icons inherit the current text color
    }

    return (
        <>
            <ul className="social-list flex flex-wrap items-center gap-4">
                <li className="social-item">
                    <a target="_blank" href="https://www.linkedin.com/in/shubham-sonake-410241231" className="social-link">
                        <Linkedin {...iconProps} />
                    </a>
                </li>
                <li className="social-item">
                    <a target="_blank" href="https://github.com/imShubh03" className="social-link">
                        <Github {...iconProps} />
                    </a>
                </li>
                <li className="social-item">
                    <a target="_blank" href="https://x.com/Shubham3102003?s=08" className="social-link">
                        <Twitter {...iconProps} />
                    </a>
                </li>
                <li className="social-item">
                    <a target="_blank" href="https://www.instagram.com/_shubham17_/" className="social-link">
                        <Instagram {...iconProps} />
                    </a>
                </li>
            </ul>
        </>
    )
}

export default Socials