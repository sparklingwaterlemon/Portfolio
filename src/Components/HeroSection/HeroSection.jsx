import "./HeroSection.css";
import HEROIMAGES from "../../Assets/Images";
import BaublesSection from "../BaublesSection/BaublesSection";

export default function HeroSection(){

    // 3, 4, 6, 7


    return (
        <>
        <section id="hero">

            <div className="hero-container">  
                <div className="hero-image">
                    <img src={HEROIMAGES[28].img}/>
                    {/* <BaublesSection /> */}
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