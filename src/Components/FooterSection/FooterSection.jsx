import "./FooterSection.css";


export default function FooterSection(){
    return (
        <section id="footer">

            <div className="resume-footer">
                <div className="rf top">
                    resume
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
                <span className="sf">Michael Kim</span>
                <span className="sf">Los Angeles</span>
                <span className="sf">email</span>
                <span className="sf">phonenumber</span>
            </div>

        </section>
    )
}