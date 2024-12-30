
import { Link } from "react-router-dom";
// import './style.css';

const StartScreen = () => {
    return (
        <section>
            <div className="umrah-temple-img">
                <Link to="/Signup">
                    <span>
                        <img src="./umrah-start-screen-img.png" alt="umrah-start-screen-img" />
                    </span>
                </Link>
            </div>
        </section>
    );
}

export default StartScreen;






