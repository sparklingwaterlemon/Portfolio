import "./ResumePage.css";

export default function ResumePage(){
    return (
        <section id="resume">            
            <iframe src={require("../../Assets/ResumeImages/GoogleDocResume1.pdf")} title="mikes resume" width="100%" height="100%"/>
        </section>
    )
}
