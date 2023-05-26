import './ScrollBar.css'
import { Link } from 'react-scroll';

export default function ScrollBar() {
    return (
        <ul className='list-container'>
            <Link activeClass="active" smooth spy to="about">
                <li>
                    About
                </li>
            </Link>
            <Link activeClass="active" smooth spy to="projects">
                <li>
                    Projects
                </li>
            </Link>
            <Link activeClass="active" smooth spy to="portfolios">
                <ul>
                    <li>
                        Past Portfolios
                    </li>
                </ul>
            </Link>
            <Link activeClass="active" smooth spy to="skills">
                <li>
                    Skills
                </li>
            </Link>
            <Link activeClass="active" smooth spy to="contact">
                <li>
                    Contact Me
                </li>
            </Link>
        </ul>
    )
}