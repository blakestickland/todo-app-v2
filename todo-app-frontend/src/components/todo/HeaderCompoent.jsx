import { Link } from "react-router-dom";
import AuthenticationService from "../../api/todo/AuthenticationService";

const HeaderComponent = () => {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    console.log("isUserLoggedIn : ", isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a
              href="https://blakestickland.github.io/portfolio-web-dev"
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-brand"
            >
              Blake Stickland Portfolio
            </a>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && 
            <li>
              <Link className="nav-link" to="/welcome/jon">
                Home
              </Link>
            </li>
            }
            {isUserLoggedIn &&
             <li>
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </li>
            }
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn &&
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            }
            {isUserLoggedIn &&
            <li>
                <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>
                    Logout
                </Link>
            </li>
            }
          </ul>
        </nav>
      </header>
    );
}

export default HeaderComponent;