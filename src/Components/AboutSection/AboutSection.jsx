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
                    <br/>
                    <ul> 2015 - 2017
                        <li>With my mother's advice, who worked at a bank for 20+ years, decided to work in a traditional office setting.</li>
                        <li>Became a Billing Assistant at an ABA start up, Behavior Frontiers, and quickly became a Billing Specialist.</li>
                        <li>In the end, I've decided to pursue a different career. </li>
                        <li>Reasoning: I wanted to find work where I can be mentally stimulated - work where I can use creativity, work that is both challenging and rewarding.</li>
                    </ul>
                    <br/>
                    <ul> 2017 - 2021
                        <li>With my father's advice, mechanic and shop owner, decided to become a state licensed Smog Check Inspector.</li>
                        <li>Attended a smog check training program, passed the state license exam, and found work at a local shop, Kim's Smog Test Only.</li>
                        <li>Ended up operating the station independently and semiautonmously.</li>
                        <li>Submitted daily reports and supporting paperwork to the employer.</li>
                        <li>Ran the day-to-day operations.</li>
                        <li>After four years, I decided to part ways.</li>
                        <li>Reasoning: In the end, it had seemed I would end up running my own shop. No disrespect to shop owners, however, I wanted more.</li>
                    </ul>
                    <br/>
                    <ul> 2021 - 2022 (you know how this starts)
                        <li>Over the years, my aunt, who serves as a VP at Merrill Lynch, has always been a source of inspiration and great advice.
                            During our conversations, she believed I could be great fit, and in her footsteps, become a Wealth Management Advisor.</li>
                        <li>There is a high failure rate among new advisors, quoted to be as high as 80 - 90%.</li>
                        <li>I wanted to optimize my chances of success before entering a program - knowledge will come with studying but I wanted to work on my soft skills and sales.</li>
                        <li>To develop these skills, I started working as a Sales Consultant at Honda of Los Angeles</li>
                        <li>Actively exceeded sales expectations, 180+ new clients annually.</li>
                    </ul>
                    <br/>
                    <ul> 2022 (Happenstance or Serendipity) 
                        <li>In a spontaneous decision that surpised even myself, I decided to sign up for a Software Engineering Bootcamp - bolstered by friends and acquaintances in the Tech Industry.</li>
                        <li>Turns out, it's one of the best decisions I have ever made.</li>
                        <li>It's something I truly enjoy and find fascinating, and I believe that I have great affinity for. </li>
                        <li>One aspect about programming I love, is the ability to see other people's work. 
                            I enjoy being able to reverse engineer code, and solve the puzzle in piecing together and understanding, a logic from a different perspective. </li>
                        <li>I can truly see myself working in the Tech Industry for the next 30+ years, and crazy to say, thrilled for the endless opporunity of learning and growth in this field.</li>


                    </ul>
                    </p>
                </div>
            </div>
        </section>
    )
}