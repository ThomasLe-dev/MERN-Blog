import "./sidebar.css";

export default function Sidebar() {
  return (

       <div className="sidebar">
            <div className="sidebar-item">
                 <span className="sidebar-item--title">ABOUT ME</span>
                 <img src="./images/me1.jpg" alt="" />
                 <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta, corrupti quasi aliquid velit deleniti debitis ab, quas iste sunt possimus sapiente ipsam eum dolores perferendis aspernatur non eaque tempore!
                 </p>
            </div>

            <div className="sidebar-item">
            <span className="sidebar-item--title">CATEGORIES</span>
            <ul className="sidebar-list">
               <li className="sidebar-list--item">Life</li>
               <li className="sidebar-list--item">Music</li>
               <li className="sidebar-list--item">Style</li>
               <li className="sidebar-list--item">Sport</li>
               <li className="sidebar-list--item">Tech</li>
               <li className="sidebar-list--item">Cinema</li>
            </ul>
            </div>

            <div className="sidebar-item">
            <span className="sidebar-item--title">FOLLOW ME</span>
            <div className="sidebar-social">
               <i className="sidebar-social--icon fab fa-facebook"></i>
               <i className="sidebar-social--icon fab fa-twitter-square"></i>
               <i className="sidebar-social--icon fab fa-linkedin"></i>
               <i className="sidebar-social--icon fab fa-instagram-square"></i>
            </div>
            </div>
       </div>

  );
}
