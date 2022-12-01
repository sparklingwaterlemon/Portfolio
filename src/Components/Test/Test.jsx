import { Link } from "react-router-dom";

export default function Test(){
    return(
        <>
            <h1> Testing Page </h1>
            <div>
                <Link to="/">Back</Link>
            </div>
        </>
    )
}