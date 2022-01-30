import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePost-container">
                <img src="./images/earth.jpg" alt="" className="singlePost-img" />
                <h1 className="singlePost-title">
                    This is just a Title
                    <div className="singlePost-edit">
                    <i className="singlePost-icon far fa-edit"></i>
                    <i className="singlePost-icon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePost-info">
                    <span className="SinglePost-author">Author: <b>LT</b></span>
                    <span className="SinglePost-date">1 hour ago</span>
                </div>
                <p className="singlePost-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Possimus reiciendis obcaecati a repellat veritatis minima vitae. 
                    Magnam illo quod libero velit sint voluptates iste consectetur rem explicabo! Non, cum rem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Possimus reiciendis obcaecati a repellat veritatis minima vitae. 
                    Magnam illo quod libero velit sint voluptates iste consectetur rem explicabo! Non, cum rem.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Possimus reiciendis obcaecati a repellat veritatis minima vitae. 
                    Magnam illo quod libero velit sint voluptates iste consectetur rem explicabo! Non, cum rem.
                </p>
            </div>
        </div>
    )
}
