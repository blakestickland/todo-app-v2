import { Link } from "react-router-dom";

const WelcomeComponent = ({ params: { name } }) => {
    return (
        <div>
            <h1>Welcome {name}</h1>
            <h2> manage your todos <Link to="/todos">here</Link></h2>
        </div>
    )
}

export default WelcomeComponent;
