import "./write.css"

export default function Write() {
    return (

      <div className="write">
          <img src="./images/wallpaper-2.jpg" alt="" className="write-img"/>
        <form className="write-form">
            <div className="write-form-group">
                <label htmlFor="file-input">
                    <i className="write-icon far fa-plus-square"></i>
                </label>
                <input type="file" id="file-input" />
                <input type="text"  placeholder="Title" className="write-input" autoFocus={true}/>
            </div>
            <div className="write-form-group">
                <textarea placeholder="Write Your Content..." type="text" className="write-input write-text"></textarea>
            </div>
            <button className="write-submit">Create Post</button>
        </form>
      </div>

    )
}
