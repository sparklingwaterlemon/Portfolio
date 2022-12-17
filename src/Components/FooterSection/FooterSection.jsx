import "./FooterSection.css";
import { Link } from "react-router-dom";

export default function FooterSection(){
    return (
        <section id="footer">

            <div className="resume-footer">
                <div className="rf top">
                    <Link to="resume">resume</Link>
                </div>
                <div className="rf bottom">
                    projects
                </div>
            </div>

            <div className="follow-footer">
                <div className="ff top">
                    Follow
                </div>
                <div className="ff bottom">
                    <div className="ff-link f">
                        <span className="ff-link-label">Daily Workouts:</span>
                        <br/>
                        <a href="https://mikesfitnessjourney.substack.com/" target="_blank" rel="noreferrer">
                        mikesfitnessjourney
                        </a>                        
                    </div>
                    <div className="ff-link m">
                        <span className="ff-link-label">Discover Music:</span>
                        <br/>
                        <a href="https://tuneinwithmike.substack.com/" target="_blank" rel="noreferrer">
                        tuneinwithmike
                        </a>
                    </div>
                </div>
            </div>

            <div className="link-footer">
                <div className="lf top">
                    Links
                </div>
                <div className="lf bottom">
                    <div className="lf-link g">
                        <a href="https://github.com/sparklingwaterlemon/" target="_blank" rel="noreferrer">
                        GitHub
                        </a>
                    </div>
                    <div className="lf-link l">
                    <a href="https://www.linkedin.com/in/michaelkim3/" target="_blank" rel="noreferrer">
                        LinkedIn
                        </a>
                    </div>
                </div>
            </div>

            <div className="self-footer">
                <div className="sf top">
                    Michael Kim
                </div>
                <div className="sf bottom">
                    <div className="sf-link c">Los Angeles</div>
                    <div className="sf-link e">michael.dev.kim@gmail.com</div>
                    <div className="sf-link n"> +1 (213) 477-4574</div>
                </div>
            </div>

        </section>
    )
}