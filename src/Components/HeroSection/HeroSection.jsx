import "./HeroSection.css";
import BaublesSection from "../BaublesSection/BaublesSection";


export default function HeroSection(){
    return (
        <>
        <section id="hero">
            <div className="hero-container">
                <BaublesSection />  
                <div className="hero-image">
                    <img src={require("../../Assets/HeroPageImages/ho6.jpg")} alt="heropage"/>
                </div>
                <div className="hero-title">
                    <span className="ht t">Full-Stack Developer</span>
                    <span className="ht n">Michael Kim</span>
                </div>
            </div>


            <div className="title-container">
                <div className="pb-title"> 
                    <span className="pb-h">
                        Software Engineer with a background in Sales, Studio Art, and Chemistry
                    </span>
                </div>
            </div>

        </section>
        </>
    )
}