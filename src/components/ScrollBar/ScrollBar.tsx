import './ScrollBar.css'
import { Link } from 'react-scroll';

export default function ScrollBar() {
    return (
        <ul className='list-container'>
            <li>
                <Link activeClass="active" smooth spy to="about">
                    ABOUT
                </Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="projects">
                    PROJECTS
                </Link>
                <ul>
                    <li>
                        <Link activeClass="active" smooth spy to="portfolios"> Past Portfolios</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="skills">
                    SKILLS
                </Link>
            </li>
            <li>
                <Link activeClass="active" smooth spy to="contact">
                    CONTACT ME
                </Link>
            </li>
        </ul>
    )
}