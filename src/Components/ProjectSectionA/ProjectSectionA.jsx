import "./ProjectSectionA.css";

export default function ProjectSectionA(){
    return(
        <section id="project-section-a">

            <div className="psa-left-container">
                <div className="psa-left-image-container">
                    <img className="psa-left-image" src={require("../../Assets/ProjectSectionA/PSALanding.png")} alt="TGGITS"/>
                </div>
            </div>

            <div className="psa-right-container">
                <div className="psa-info-container">
                    <div className="psa-title">
                        The Great Gig in the Sky
                    </div>
                    <div className="psa-descript">
                            Lunar Themed Weather App and Journal - MERN Stack
                    </div>
                    <div className="psa-text">
                        <ul>
                            <li>Apple like scroll animation of the moon.</li>
                            <li>RestfulAPI - full CRUD operations</li>
                            <li>Extensive use of React Hooks</li>
                        </ul>
                    </div>
                    <div className="psa-link-container">
                        <a href="https://github.com/sparklingwaterlemon/The-Great-Gig-in-the-Sky" target="_blank" rel="noreferrer">
                            <button className="psa-button gh"> GitHub </button>
                        </a>
                        <a href="https://the-great-gig-in-the-sky.herokuapp.com/" target="_blank" rel="noreferrer">
                            <button className="psa-button ll"> Live Link </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}