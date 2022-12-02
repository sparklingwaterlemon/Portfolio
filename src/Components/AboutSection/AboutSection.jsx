import "./AboutSection.css";
import { Link } from "react-scroll";


export default function AboutSection() {
    return (
        <section id="about">
            <div className="about-container">
                <div className="about-text">
                    <div className="at-p">
                        My journey from Ceramic Artist to Software Engineer
                        <br /> (Skip ahead to <Link id="skip-to-project" activeClass="active" smooth spy to="projects">Projects</Link>)
                        <br />
                        <br />
                        <ul> 2009 - 2013
                            <li>Graduated from Centre College in 2013 with a B.A in Studio Art and a minor in Chemistry.</li>
                            <li>Cofounded the Iota Chapter of the Delta Kappa Epsilon Fraternity and served as the Interfraternity Council Delegate.</li>
                            <li>Served as the Men's Lacrosse Team Student Manager.</li>
                        </ul>
                        <ul> 2013 - 2015
                            <li>Pursued a career as a Ceramicist, with a focus on nonfunctional art.</li>
                            <li>Started Pallas! Ceramics.</li>
                        </ul>
                        <ul> 2015 - 2017
                            <li>Worked as a Billing Assistant at an Applied Behavior Analysis (ABA) start up.</li>
                            <li>Promoted to Billing Specialist.</li>
                        </ul>
                        <ul> 2017 - 2021
                            <li>Obtained a state license - was certified as a CA State Licensed Smog Check Inspector.</li>
                            <li>Ran the day-to-day operations of a local smog check business.</li>
                            <li>Operated the station independently and semiautonomously.</li>
                            <li>Submitted daily reports and supporting paperwork to the employer.</li>
                            
                        </ul>
                        <ul> 2021 - 2022 
                            <li>Worked as Sales Consultant for Honda of Los Angeles.</li>
                            <li>Actively exceeded sales expectations, 180+ new clients annually.</li>
                        </ul>
                        <ul> 2022 
                            <li>Encouraged by friends and acquaintances in the tech industry, I signed up for a software engineering bootcamp.</li>
                            <li>This decision turned out to be one of the best I have made.</li>
                            <li>I've discovered a field that intrigues me, satisfies my creative needs, and I find the process enjoyable.</li>
                            <li>One aspect of this field I find fascinating, is the ability to see other people's work.</li>
                            <li>I enjoy being able to reverse engineer code, and solve the puzzle in piecing together and understanding, a logic from a different perspective.</li>
                            <li>This is a field where I can see myself involved in for the next 30+ years.</li>
                            <li>I am thrilled to have begun my journey as a Software Engineer and am excited for the continuous learning and endless growth that is possible in this field.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}