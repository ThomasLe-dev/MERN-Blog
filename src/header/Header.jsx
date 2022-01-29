import "./header.css";

export default function Header() {
  return( 

        <div className='header'>
            <div className="header-titles">
                <span  className="header-titles-small">LT'S MERN</span>
                <span  className="header-titles-big">BLOG</span>
            </div>
            <img src="./images/wallpaper-2.jpg" alt=""  className="header-img"/>
        </div>

  );
}
