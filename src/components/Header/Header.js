import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="k-header">
      <div className="k-logo">
        <img
          src="https://static.emaktab.uz/img/logotypes/uzlogotype.png"
          alt=""
        />
      </div>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="about">Tashkilot</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
