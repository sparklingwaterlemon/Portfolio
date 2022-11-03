import "./FooterSection.css";


export default function FooterSection(){
    return (
        <section id="footer">
            <div className="resume-footer">
                <span className="rf">Resume</span>
                <span className="rf">Projects</span>
            </div>
            <div className="follow-footer">
                <span className="ff">Links</span>
                <span className="ff">Follow my Workouts: fitnessubstack</span>
                <span className="ff">Follow my Music: tuneinwithmike@substack</span>

            </div>
            <div className="link-footer">
                <span className="lf">Links</span>
                <span className="lf">Github @ Github</span>
                <span className="lf">LinkedIn@LinkedIn</span>
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