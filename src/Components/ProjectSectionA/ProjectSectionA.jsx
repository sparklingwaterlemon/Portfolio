import "./ProjectSectionA.css";

export default function ProjectSectionA(){
    return (
        <section id="projects">
            <div className="project-a-transition" />

            <div className="a-image-container">
                <div className="a-long-image">
                    {/* <img className="a-long-image" /> */} 
                    <div className="a-tall-image">
                        {/* <img className="a-tall-image" /> */}
                    </div>
                </div>
            </div>



            <div className="a-statement-container">
                <div className="a-title">
                    Craps
                </div>
                <div className="a-text">
                    Ispo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati porro tempora explicabo ea dolores.
                </div>

                <div className="a-button-container">
                    <button className="button1">
                        GitHub
                    </button>
                    <button className="button2">
                        Live Link
                    </button>
                </div>
            </div>
         


        </section>
    )
}