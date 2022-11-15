import "./HeroSection.css";
import BaublesSection from "../BaublesSection/BaublesSection";

// import HEROIMAGES from "../../Assets/Images/index";

export default function HeroSection(){

    return (
        <>
        <section id="hero">

            <div className="hero-container">  
                <div className="hero-image">
                    {/* <img src={HEROIMAGES[0].img} className="hero-image"/> */}
                    <BaublesSection />
                </div>
                <div className="hero-title">
                    <span className="ht">Full-Stack Developer</span>
                    <span className="hn">Michael Kim</span>
                </div>
            </div>


            <div className="title-container">
                <div className="pb-title"> 
                    <span className="pb-h">
                        Lorem ipsum dolor sit amet consectetur. Dele iores ut magnam.    
                    </span>
                </div>
                <div className="pb-text">
                    <span className="pb-t">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut facere vel reprehenderit adipisci maiores, labore, repudiandae repellat odit at amet doloremque! Numquam, ex a tenetur corrupti quidem molestiae quaerat quo?
                    </span>
                </div>
            </div>

        </section>
        </>
    )
}