import "./ResumePage.css";

export default function ResumePage(){
    return (
        <section id="resume">            
            <iframe src={require("../../Assets/ResumeImages/resume1.3.0.pdf")} title="mikes resume" width="100%" height="100%"/>
        </section>
    )
}
