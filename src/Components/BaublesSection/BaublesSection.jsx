import "./BaublesSection.css";
import { useState, useEffect } from "react";

export default function BaublesSection(){
    const [spotLight1,setSpotLight1] = useState(true);
    const [spotLight2,setSpotLight2] = useState(true);
    const [spotLight3,setSpotLight3] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setSpotLight1(true)
        }, 10000);
    },[spotLight1]);

    useEffect(()=>{
        setTimeout(()=>{
            setSpotLight1(true)
        }, 10000);
    },[spotLight2]);

    useEffect(()=>{       
        setTimeout(()=>{
            setSpotLight1(true)
        }, 10000);
    },[spotLight3])


    return (
        <>
            <button onClick={()=>{setSpotLight1(false)}} className={ spotLight1 ? "spotlight l" : "pop"} />
            <button onClick={()=>{setSpotLight2(false)}} className={ spotLight2 ? "spotlight m" : "pop"} />
            <button onClick={()=>{setSpotLight3(false)}} className={ spotLight3 ? "spotlight s" : "pop"} />
        </>
    )
}