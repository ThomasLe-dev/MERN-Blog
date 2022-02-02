import "./topBar.css";
import { Link } from "react-router-dom";

export default function topbar() {
  const user = false;
  return(
        <div className="top">
          <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-linkedin"></i>
            <i className="topIcon fab fa-instagram-square"></i>
          </div>
          <div className="topCenter">
              <ul className="topList">
                  <li className="topList-item">
                    <Link to="/" className="link">HOME</Link>
                  </li>
                  <li className="topList-item">
                  <Link to="/" className="link">ABOUT</Link>
                  </li>
                  <li className="topList-item">
                  <Link to="/" className="link">CONTACT</Link>
                  </li>
                  <li className="topList-item">
                  <Link to="/write" className="link">WRITE</Link>
                  </li>
                  <li className="topList-item">
                    {user && "LOGOUT"}
                  </li>
              </ul>
          </div>

          <div className="topRight">
            {
              user ? (
                <img className="topImg" src="./images/profile.jpg" alt="" />
                ) : (
                  <ul className="topList">
                    <li className="topList-item">
                    <Link to="/login" className="link">LOGIN</Link>
                    </li>
                    <li className="topList-item">
                    <Link to="/register" className="link">REGISTER</Link>
                    </li>
                  </ul>
                )
            }
              <i className="topSearch-icon fas fa-search"></i>
          </div>
        </div>
    ); 
    
}
