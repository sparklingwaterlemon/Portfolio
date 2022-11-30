import "./AboutSection.css";
import { Link } from "react-scroll";


export default function AboutSection(){
    return(
        <section id="about">
            <div className="about-container">
                <div className="about-text">

                    <p className="at-p"> 
                    In search of a Forever Career - My journey from Ceramic Artist to Software Engineer
                    <br/> (Skip ahead to <Link id="skip-to-project" activeClass="active" smooth spy to="projects">Projects</Link>)
                    <br/>
                    <br/>
                    <ul> 2009 - 2013
                        <li>Graduated from Centre College in 2013 with a B.A in Studio Art and a minor in Chemistry.</li>
                        <li>Cofounded the Iota Chapter of the Delta Kappa Epsilon Fraternity and served as the Interfraternity Council Delegate.</li>
                        <li>Served as the Men's Lacrosse Team Student Manager.</li>
                    </ul>
                    <br/>
                    <ul> 2013 - 2015
                        <li>Started Pallas! Ceramics. Pursued a career as a Ceramicist, with a focus on nonfunctional art.</li>
                        <li>Biggest failure and a bigger lesson learned!</li>
                    <br/>
                        <li>While pursuing ceramics, I became a bartender to support myself.</li>
                        <li>Attended a bartending school, bartended at Xlanes LA, and eventually at the prestigous Bel-Air Bay Club.</li>
                    </ul>



                    <br/> Approx. 2015 - 2017
                    <br/> - With my mother's advice, who worked at a bank for 20+ years, decided to work in a traditional office setting.
                    <br/> - Became a Billing Assistant at an ABA start up, Behavior Frontiers, and quickly became a Billing Specialist.
                    <br/> - After the 2 years, I've decided to pursue a different 
                

                    </p>
                </div>
            </div>
        </section>
    )
}