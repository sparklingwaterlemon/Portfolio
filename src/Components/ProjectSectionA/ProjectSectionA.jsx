import "./ProjectSectionA.css";

export default function ProjectSectionA(){
    return(
        <section id="project-section-a">

            <div className="pa-left-container">
                <div className="pa-left-image-container">
                    <div className="pa-left-test-image"/>
                </div>
            </div>

            <div className="pa-right-container">
                <div className="pa-info-container">
                    <div className="pa-title">
                        The Great Gig in the Sky
                    </div>
                    <div className="pa-text">
                        Add Resume Description
                        <br/>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                    </div>
                    <div className="pa-link-container">
                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                            <button className="pa-button gh"> GitHub </button>
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <button className="pa-button ll"> Live Link </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}