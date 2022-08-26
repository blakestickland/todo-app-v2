import AuthenticationService from "../../api/todo/AuthenticationService";
import { Navigate } from "react-router-dom";

const AuthenticatedRoute = (props) => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    return (
      <>
        {isUserLoggedIn && {...props.children}}
        {!isUserLoggedIn && <Navigate to="/login" />}
      </>
    );
    
}

export default AuthenticatedRoute;