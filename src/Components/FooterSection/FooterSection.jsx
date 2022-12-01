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
                    <div className="ff-link f">Follow my Workouts: fitnessubstack</div>
                    <div className="ff-link m">Follow my Music: tuneinwithmike@substack</div>
                </div>
            </div>

            <div className="link-footer">
                <div className="lf top">
                    Links
                </div>
                <div className="lf bottom">
                    <div className="lf-link g">Github @ Github</div>
                    <div className="lf-link l">LinkedIn@LinkedIn</div>
                </div>
            </div>

            <div className="self-footer">
                <div className="sf top">
                    Michael Kim
                </div>
                <div className="sf bottom">
                    <div className="sf-link c">Los Angeles</div>
                    <div className="sf-link e">michaelstatus200@gmail.com</div>
                    {/* <div className="sf-link n">(213) 477-4574</div> */}
                    <div className="sf-link n"> phonenumber?</div>
                </div>
            </div>

        </section>
    )
}