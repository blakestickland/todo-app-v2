import { useState } from "react";

const TodoApp = () => {
    return (
        <div className="TodoApp">
            <LoginComponent />
        </div>
    )
}

export default TodoApp;

const LoginComponent = () => {
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
            console.log("Successful login");
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
        {hasLoginFailed && <div>Invalid Credentials</div>}
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
        <button onClick={handleLogin}>Login</button>
      </div>
    );
}