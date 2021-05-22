import { useState } from 'react';
export default () => {
    const [isOpen, setOpen] = useState(false)
    const toggleOpen = () => {
        setOpen(currentState => !currentState);
    }
    return (
        <div>
            <ul className="navigation-bar">
                <li><a href="/">Home</a></li>
                <li><a href="/get-started">Get Started</a></li>
                <li><a href="/donate">Donate</a></li>
                <li className="special"><a href="/about-us">About us</a></li>
            </ul>
            <div className="navigation-bar-mobile">
                <div onClick={toggleOpen} className="navigation-toggle"></div>
                {isOpen &&
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/get-started">Get Started</a></li>
                        <li><a href="/donate">Donate</a></li>
                        <li><a href="/about-us">About us</a></li>
                        <li className="exit-button"><a onClick={toggleOpen}>X</a></li>
                    </ul>
                }
            </div>
        </div>
    )
}