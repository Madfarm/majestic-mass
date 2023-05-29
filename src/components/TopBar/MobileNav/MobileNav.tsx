import './MobileNav.css';
import { useState } from 'react';
import { Link } from 'react-scroll';

export default function MobileNav() {
    const [menuVisible, setMenuVisible] = useState(false);

    function toggleMenu(){
        setMenuVisible(!menuVisible);
    }

    return (
        <div id="mobileNav" onClick={toggleMenu}>
            <h2>Go to</h2>
            <svg className="svg-icon" height={"3vh"} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M533.215 609.227c-8.956-12.502-7.819-30.005 3.412-41.236L819.47 285.148l90.51 90.51c12.497 12.497 12.497 32.758 0 45.255l-282.54 282.54 0.304 0.303-90.51 90.51c-12.496 12.496-32.757 12.496-45.254 0L96 398.285l90.51-90.51c12.496-12.497 32.758-12.497 45.255 0l301.45 301.45z"  />
            </svg>
            {menuVisible && (
                <div id="dropdownMenu">
                <ul>
                    <li><Link className='dropdownLink' activeClass='active' smooth spy to='about'>About</Link></li>
                    <li>Projects
                        <ul>
                            <li> Past Portfolios</li>
                        </ul>
                    </li>
                    <li>Skills</li>
                    <li>Contact Me</li>
                </ul>
            </div>
            ) }
        </div>
    )
}