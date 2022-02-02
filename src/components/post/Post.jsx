import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img src="../images/earth.jpg" alt="" className="post-img" />

            <div className="post-info">
                <div className="post-cats">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">Life</span>
                </div>
                <span className="post-title">
                    Nothing but a title
                </span>
                <hr />
                <span className="post-date">
                    1 hour ago
                </span>
            </div>
            <p className="post-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit alias consectetur, aut soluta harum reiciendis facere hic numquam ex fugiat perferendis sapiente. 
                Ipsa odit voluptates, nobis voluptatem pariatur veritatis possimus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit alias consectetur, aut soluta harum reiciendis facere hic numquam ex fugiat perferendis sapiente. 
                Ipsa odit voluptates, nobis voluptatem pariatur veritatis possimus!
            </p>
        </div>
    )
}
