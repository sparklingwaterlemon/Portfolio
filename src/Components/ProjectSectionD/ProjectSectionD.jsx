import "./ProjectSectionD.css";

export default function ProjectSectionD(){
    return(
        <section id="project-section-d">

            <div className="psd-left-container">
                <div className="psd-left-image-container">
                    <img 
                        className="psd-left-image" 
                        src={require("../../Assets/ProjectSectionD/ProjectSectionDLanding.png")} alt="TGGITS"/>
                </div>
            </div>

            <div className="psd-right-container">
                <div className="psd-info-container">
                    <div className="psd-title">
                        Craps
                    </div>
                    <div className="psd-text">
                        Add Resume Description
                        <br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                    </div>
                    <div className="psd-link-container">
                        <a href="https://github.com/sparklingwaterlemon/Project-1-Craps" target="_blank" rel="noreferrer">
                            <button className="psd-button gh"> GitHub </button>
                        </a>
                        <a href="https://sparkly-platypus.netlify.app/" target="_blank" rel="noreferrer">
                            <button className="psd-button ll"> Live Link </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}