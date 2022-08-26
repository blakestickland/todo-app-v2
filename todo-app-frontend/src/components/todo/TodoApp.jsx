import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import withNavigation from "./withNavigation";
import withParams from "./withParams";
import HeaderComponent from "./HeaderCompoent";
import FooterComponent from "./FooterComponent";
import AuthenticatedRoute from "./AuthenticatedRoute";

const TodoApp = () => {
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    const HeaderCompoentWithNavigation = withNavigation(HeaderComponent);
    const ListTodosComponentWithParamsAndNavigation = withParams(withNavigation(ListTodosComponent));

    return (
      <div className="TodoApp">
        <Router>
          <HeaderCompoentWithNavigation />
          <Routes>
            <Route path="/" exact element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route
              path="/welcome/:name"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponentWithParams />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponentWithParamsAndNavigation />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
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
