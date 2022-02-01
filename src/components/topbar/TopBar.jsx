import "./topBar.css";

export default function topbar() {
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
                  <li className="topList-item">HOME</li>
                  <li className="topList-item">ABOUT</li>
                  <li className="topList-item">CONTACT</li>
                  <li className="topList-item">WRITE</li>
                  <li className="topList-item">LOGOUT</li>
              </ul>
          </div>
          <div className="topRight">
              <img className="topImg" src="./images/profile.jpg" alt="" />
              <i className="topSearch-icon fas fa-search"></i>
          </div>
        </div>
    ); 
    
}
