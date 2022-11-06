import "./ProjectSectionD.css";

export default function ProjectSectionD(){
    return(
        <section id="projects">
            <div className="left-container">
                <div className="pd-info-container">
                    <div className="pd-title">
                        Craps
                    </div>
                    <div className="pd-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae commodi, quo ratione aspernatur provident adipisci, dolore nostrum neque fugiat.
                    </div>
                    <div className="pd-link-container">
                        <a className="pdlink yt" href="https://www.youtube.com" target="_blank" rel="noreferrer">
                            <button className="pd-button yt"> YT </button>
                        </a>
                        <a className="pdlink gg" href="https://www.google.com" target="_blank" rel="noreferrer">
                            <button className="pd-button gg"> Google </button>
                        </a>
                    </div>
                </div>
            </div>


            <div className="right-container">
                <div className="right-image-container">
                    <div className="right-test-image"/>
                </div>
            </div>
        </section>
    )
}