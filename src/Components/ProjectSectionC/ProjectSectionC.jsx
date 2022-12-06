import "./ProjectSectionC.css";

export default function ProjectSectionC(){
    return(
        <section id="project-section-c">

            <div className="psc-left-container">
                <div className="psc-title">
                    Portfolio
                </div>
                <div className="psc-descript">
                    You're here! Personal Site
                </div>
                <div className="psc-descript-tag">
                        Created using React
                </div>
            </div>

            <div className="psc-middle-container">
                <div className="psc-text">
                    <ul>
                        <li> Incorporated React Scroll Library, SweetAlert2 Library, and EmailJS API</li>
                        <li> Incorporated new React v6.4 Client Side Routing</li>
                        <li> Coded in Error Page - useRouteError (check out ReadMe)</li>
                        <li> React Hooks for Bubble Animation</li>
                        <li> CSS - Keyframes/ Animations/ Transitions</li>
                        <li> Media Responsive Design</li>
                    </ul>
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