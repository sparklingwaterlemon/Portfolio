import "./ProjectSectionC.css";

export default function ProjectSectionC(){
    return(
        <section id="project-section-c">

            <div className="psc-left-container">
                <div className="psc-title">
                    Portfolio
                </div>
            </div>

            <div className="psc-middle-container">
                <div className="psc-text">
                    Add Resume Description
                    <br/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                </div>
            </div>
            
            <div className="psc-right-container">
                <div className="psc-link-container">
                    <a href="https://github.com/sparklingwaterlemon/Portfolio" target="_blank" rel="noreferrer">
                        <button className="psc-button gh"> GitHub </button>
                    </a>
                    <a href="https://michaelkim.netlify.app/" target="_blank" rel="noreferrer">
                        <button className="psc-button ll"> Live Link </button>
                    </a>
                </div>
            </div>
        </section>
    )
}