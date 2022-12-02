import "./ResumePage.css";
import { Link } from "react-router-dom";

export default function ResumePage(){
    return (
        <section id="resume">            
            {/* <iframe src={require("../../Assets/ResumeImages/Michael-Kim-Resume-Dec-2022.pdf")} width="100%" height="100%"/> */}
            <iframe src={require("../../Assets/ResumeImages/Michael-Kim-Resume-Dec-2022.pdf")} width="100%" height="100%"/>
        </section>
    )
}
