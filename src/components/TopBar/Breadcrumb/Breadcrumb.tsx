import { Link } from "react-scroll";


export default function BreadCrumb(){
    return (
        <Link className="breadcrumb" activeClass="activeBreadcrumb" smooth spy to="projects">Hats</Link>
    )
}