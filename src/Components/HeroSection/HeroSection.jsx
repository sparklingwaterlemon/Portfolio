import "./HeroSection.css";
import HEROIMAGES from "../../Assets/Images/index";

export default function HeroSection(){
    return (
        <>
        <section id="landing">
            <div className="hero-container">
                <img src={HEROIMAGES[0].img} className="hero-image"/>
                <div className="hero-title">
                    Michael Kim
                </div>
            </div>
            <div className="title-container">
                <div className="pb-title"> Personal Brand Statement Header Personal Brand Statement Header Personal Brand Statement Header</div>
            </div>
        </section>
        
        <section id="text">
            <div className="text-container">
                <div className="pb-text"> blah bloo beeh happy  happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween s</div>
            </div>
        </section>
        </>
    )
}