import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";
import { useState } from "react";

const WelcomeComponent = ({ params: { name } }) => {
    const [welcomeMessage, setWelcomeMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const getWelcomeMessage = () => {
        // HelloWorldService.executeHelloWorldBeanService()
        //   .then((res) => handleSuccessfulResponse(res))
        //   .catch((error) => console.log(error));
        
        HelloWorldService.executeHelloWorldPathVariableService(name)
          .then((res) => handleSuccessfulResponse(res))
          .catch((error) => handleRuntimeError(error));
    }

    const handleSuccessfulResponse = (response) => {
        console.log(response);
        setErrorMessage(null);
        setWelcomeMessage(response.data.message);
    }

    const handleRuntimeError = (error) => {
        console.log(error);
        setWelcomeMessage(null);
        setErrorMessage(error.message);
    }
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {name}. Manage todos{" "}
          <Link className="li" to="/todos">
            here
          </Link>
        </div>
        <div className="container">
          Click for a personalised welcome!
          <button onClick={getWelcomeMessage} className="btn btn-success">
            Get Welcome message
          </button>
        </div>
        <div className="container">
          {welcomeMessage && <p>Welcome back {welcomeMessage}</p>}
          {errorMessage && <p>Unfortunately, {errorMessage}</p>}
        </div>
      </>
    );
}

export default WelcomeComponent;
