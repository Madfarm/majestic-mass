import './ScrollBar.css'
import { Link } from 'react-scroll';

export default function ScrollBar() {
    return (
        <ul className='list-container'>
            <Link activeClass="active" smooth spy to="about">
                <li>
                    ABOUT
                </li>
            </Link>
            <Link activeClass="active" smooth spy to="projects">
                <li>
                    PROJECTS
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
                    SKILLS
                </li>
            </Link>
            <Link activeClass="active" smooth spy to="contact">
                <li>
                    CONTACT ME
                </li>
            </Link>
        </ul>
    )
}