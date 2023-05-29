import { Link } from "react-scroll";
import './Breadcrumb.css'

export default function BreadCrumb(){
    return (
        <>
        <Link className="breadcrumb" activeClass="activeBreadcrumb" smooth spy to="about">About</Link>
        <Link className="breadcrumb" activeClass="activeBreadcrumb" smooth spy to="projects">Projects</Link>
        <Link className="breadcrumb" activeClass="activeBreadcrumb" smooth spy to="portfolios">Portfolios</Link>
        <Link className="breadcrumb" activeClass="activeBreadcrumb" smooth spy to="skills">Skills</Link>
        <Link className="breadcrumb" activeClass="activeBreadcrumb" smooth spy to="contact">Contact Me</Link>
        </>
    )
}