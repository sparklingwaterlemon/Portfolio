import "./ProjectSectionB.css";

export default function ProjectSectionB(){
    return(
        <section id="project-section-b">

            <div className="pb-left-container">
                <div className="pb-info-container">
                    <div className="pb-title">
                        Shake On It!
                    </div>
                    <div className="pb-text">
                        Add Resume Description
                        <br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                    </div>
                    <div className="pb-link-container">
                        <a href="https://github.com/sparklingwaterlemon/Shake-On-It/" target="_blank" rel="noreferrer">
                            <button className="pb-button gh"> GitHub </button>
                        </a>
                        <a href="https://shakeonit.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button className="pb-button ll"> Live Link </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className="pb-right-container">
                <div className="pb-right-image-container">
                    <img className="pb-right-image" src={require("../../Assets/ProjectSectionB/ProjectSectionBLanding.png")} alt="ShakeOnIt"/>
                </div>
            </div>
        </section>
    )
}