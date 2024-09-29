import "./navbar.css";
import {Link} from 'react-router-dom';

function Navbar() {
    return (
      <>
        <nav className="navbar">
          <Link className="logo" to="/">Logo</Link>
          <ul className="links">
            <li className="link">
              <Link to="/">HOME</Link>
            </li>
            <li className="link">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="link">
              <Link to="/services">SERVICES</Link>
            </li>
            <li className="link">
                <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Navbar;
