import "./ResumePage.css";
import { Link } from "react-router-dom";

export default function ResumePage(){
    return(
        <section id="resume">
            <h1> Resume Page</h1>
            <Link to="/"> Go Back </Link>
        </section>
    )
}