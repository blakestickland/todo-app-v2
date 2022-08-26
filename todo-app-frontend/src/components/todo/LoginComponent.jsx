import { useState } from "react";
import AuthenticationService from "../../api/todo/AuthenticationService";

const LoginComponent = ({ navigate }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showLoginSuccess, setShowLoginSuccess] = useState(false);

    const handleChange = (event) => {
        switch(event.target.name) {
            case "username": 
                setUsername(event.target.value);
                break;
            case "password": 
                setPassword(event.target.value);
                break;
            default: 
                break;
        }  
    }

    const handleLogin = () => {
        // jon, dummy
        if (username === "jon" && password === "dummy") {
            AuthenticationService.registerSuccessfulLogin(username, password);
            navigate(`/welcome/${username}`);
            setShowLoginSuccess(true);
            setHasLoginFailed(false);
        }
        else {
            console.log("Invalid Credentials at login");
            setShowLoginSuccess(false);
            setHasLoginFailed(true);
        }
    }

    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {showLoginSuccess && <div>Successful Login</div>}
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className="btn btn-success" onClick={handleLogin}>Login</button>
        </div>
      </div>
    );
}

export default LoginComponent;