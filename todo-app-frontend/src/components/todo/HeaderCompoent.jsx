import { Link } from "react-router-dom";

const HeaderComponent = () => {
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
            <li className="nav-link">
              <Link className="nav-link" to="/welcome/jon">
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/todos">
                Todos
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-link">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default HeaderComponent;