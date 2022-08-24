import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import withNavigation from "./withNavigation";
import withParams from "./withParams";

const TodoApp = () => {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);

    return (
      <div className="TodoApp">
        <Router>
          <Routes>
            <Route path="/" exact element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>An Error Occurred.</p>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div>
    );
}

export default TodoApp;
