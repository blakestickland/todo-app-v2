import { Link } from "react-router-dom";

const WelcomeComponent = ({ params: { name } }) => {
    return (
        <>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome {name}. Manage your todos <Link className="li" to="/todos">here</Link>
            </div>
        </>
    );
}

export default WelcomeComponent;
