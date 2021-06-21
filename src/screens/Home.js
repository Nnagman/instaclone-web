import {logUserOut} from "../apollo";
import {useHistory} from "react-router-dom";
import routes from "../routes";

function Home() {
    const history = useHistory();
    return (
        <div>
            <h1>Welcome we did it!</h1>
            <button onClick={() => logUserOut(history, routes)}>Log out now!
            </button>
        </div>
    );
}

export default Home;