import "./ProjectSectionD.css";

export default function ProjectSectionD(){
    return(
        <section id="project-section-d">

            <div className="psd-left-container">
                <div className="psd-left-image-container">
                    <img className="psd-left-image" src={require("../../Assets/ProjectSectionA/PSALanding.png")} alt="TGGITS"/>
                </div>
            </div>

            <div className="psd-right-container">
                <div className="psd-info-container">
                    <div className="psd-title">
                        The Great Gig in the Sky
                    </div>
                    <div className="psd-text">
                        Add Resume Description
                        <br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                    </div>
                    <div className="psd-link-container">
                        <a href="https://github.com/sparklingwaterlemon/The-Great-Gig-in-the-Sky" target="_blank" rel="noreferrer">
                            <button className="psd-button gh"> GitHub </button>
                        </a>
                        <a href="https://the-great-gig-in-the-sky.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button className="psd-button ll"> Live Link </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}