import "./home.scss";
import homeIcon from "../../assets/images/home-icons.svg";
import thinkLogo from "../../assets/images/think.svg";
import { Link } from 'react-router-dom';
const Home = () => {
    return (<div className="home-wrapper">
        <div className="content-wrap">
            <div className="content">
                <h1><img src={thinkLogo} />Join for a Quiz?</h1>
                <ul>
                    <li>There will be 4 Questions</li>
                    <li>Each question has 4 options, with one correct answer.</li>
                    <li>Users must answer each question within 7 seconds.</li>
                    <li>The timer will displayed</li>
                </ul>
                <div className="begin-btn">
                    <Link to="/start-quiz">
                        <button>
                            <span className="front">Let's Begin!!</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div class="questionmark-container"><img src={homeIcon} /></div>
    </div>)
};

export default Home;