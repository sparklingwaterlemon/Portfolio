import "./HeroSection.css";
import BaublesSection from "../BaublesSection/BaublesSection";


export default function HeroSection(){
    return (
        <>
        <section id="hero">
            <div className="hero-container">
                <div className="hero-image">
                    <BaublesSection />  
                    <img src={require("../../Assets/HeroPageImages/ho6.jpg")}/>
                </div>
                <div className="hero-title">
                    <span className="ht t">Full-Stack Developer</span>
                    <span className="ht n">Michael Kim</span>
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