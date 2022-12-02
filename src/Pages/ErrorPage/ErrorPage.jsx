import "./ErrorPage.css";
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    console.error(error);
    
    return (
        <>
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred!!</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <p>
            <Link to="/">Go Back to Portfolio</Link>
          </p>
        </div>
        </>
    );
}