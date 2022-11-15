import "./BaublesSection.css";
import { useState, useEffect } from "react";

export default function BaublesSection(){
    const [spotLight1,setSpotLight1] = useState(true);
    const [spotLight2,setSpotLight2] = useState(true);
    const [spotLight3,setSpotLight3] = useState(true);

    useEffect(()=>{
        console.log("bubble-timer-1")

        setTimeout(()=>{
            setSpotLight1(true)
        }, 1000);
    },[spotLight1]);

    useEffect(()=>{
        console.log("bubble-timer-2")

        setTimeout(()=>{
            setSpotLight1(true)
        }, 1000);
    },[spotLight2]);

    useEffect(()=>{
        console.log("bubble-timer-3")
        
        setTimeout(()=>{
            setSpotLight1(true)
        }, 1000);
    },[spotLight3])


    return (
        <>
            <button onClick={()=>{setSpotLight1(false)}} className={ spotLight1 ? "spotlight1" : "pop"} />
            <button onClick={()=>{setSpotLight2(false)}} className={ spotLight2 ? "spotlight2" : "pop"} />
            <button onClick={()=>{setSpotLight3(false)}} className={ spotLight3 ? "spotlight3" : "pop"} />
        </>
    )
}