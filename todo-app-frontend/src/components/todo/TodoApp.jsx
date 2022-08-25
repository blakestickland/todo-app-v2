import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import withNavigation from "./withNavigation";
import withParams from "./withParams";
import HeaderComponent from "./HeaderCompoent";
import FooterComponent from "./FooterComponent";

const TodoApp = () => {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);

    return (
      <div className="TodoApp">
        <Router>
            <HeaderComponent />
            <Routes>
                <Route path="/" exact element={<LoginComponentWithNavigation />} />
                <Route path="/login" element={<LoginComponentWithNavigation />} />
                <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                <Route path="/todos" element={<ListTodosComponent />} />
                <Route path="/logout" element={<LogoutComponent />} />
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
            <FooterComponent />
        </Router>
      </div>
    );
}

export default TodoApp;
