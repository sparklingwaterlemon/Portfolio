import "./ProjectSectionB.css";

export default function ProjectSectionB(){
    return(
        <section id="project-section-b">

            <div className="psb-left-container">
                <div className="psb-info-container">
                    <div className="psb-title">
                        Shake On It!
                    </div>
                    <div className="psb-text">
                        Add Resume Description
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                    </div>
                    <div className="psb-link-container">
                        <a href="https://github.com/sparklingwaterlemon/Shake-On-It/" target="_blank" rel="noreferrer">
                            <button className="psb-button gh"> GitHub </button>
                        </a>
                        <a href="https://shakeonit.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button className="psb-button ll"> Live Link </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="psb-right-container">
                <div className="psb-right-image-container">
                    <img className="psb-right-image" src={require("../../Assets/ProjectSectionB/ProjectSectionBLanding.png")} alt="ShakeOnIt"/>
                </div>
            </div>
        </section>
    )
}