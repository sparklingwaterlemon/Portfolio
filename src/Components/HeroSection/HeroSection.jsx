import "./HeroSection.css";
import HEROIMAGES from "../../Assets/Images/index";

export default function HeroSection(){
    return (
        <section id="hero">
            <div className="hero-image-container">
                {/* <img src={HEROIMAGES[0].img} className="hero-image"/> */}
                <img src="" className="hero-image"/>
                <div className="hero-name">
                    Michael Kim
                </div>
            </div>
            <div className="hero-pb-container">
                <div className="hero-pb"> Personal Brand Statement Header Personal Brand Statement Header Personal Brand Statement Header</div>
            </div>
            <div className="pb-text"> blah bloo beeh happy halloween blah bloo beeh happy halloween  blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween blah bloo beeh happy halloween s</div>
        </section>
    )
}