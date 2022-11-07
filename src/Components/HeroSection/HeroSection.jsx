import "./HeroSection.css";
// import HEROIMAGES from "../../Assets/Images/index";
import { useState } from "react";
import { useEffect } from "react";

export default function HeroSection(){
    const [spotLight1,setSpotLight1] = useState(true);
    const [spotLight2,setSpotLight2] = useState(true);
    const [spotLight3,setSpotLight3] = useState(true);

    useEffect(()=>{
        console.log("bubble-timer-1")

        setTimeout(()=>{
            setSpotLight1(true)
        }, 14000);
    },[spotLight1]);

    useEffect(()=>{
        console.log("bubble-timer-2")

        setTimeout(()=>{
            setSpotLight1(true)
        }, 14000);
    },[spotLight2]);

    useEffect(()=>{
        console.log("bubble-timer-3")
        
        setTimeout(()=>{
            setSpotLight1(true)
        }, 14000);
    },[spotLight3])

    return (
        <>
        <section id="hero">

            <div className="hero-container">  
                <div className="hero-image">
                {/* <img src={HEROIMAGES[0].img} className="hero-image"/> */}
                    <button onClick={()=>{setSpotLight1(false)}} className={ spotLight1 ? "spotlight1" : "pop"} />
                    <button onClick={()=>{setSpotLight2(false)}} className={ spotLight2 ? "spotlight2" : "pop"} />
                    <button onClick={()=>{setSpotLight3(false)}} className={ spotLight3 ? "spotlight3" : "pop"} />
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