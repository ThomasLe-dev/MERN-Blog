import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
    return (

        <div className="settings">
            <div className="settings-container">
                <div className="settings-title">
                    <span className="settings-update--title">Update Account</span>
                    <span className="settings-delete--title">Delete Account</span>
                </div>
                <form action="" className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settings-profile_pic">
                        <img src="./images/profile.jpg" alt="" />
                        <label htmlFor="file-input">
                        <i className="settings-profile_pic-icon fas fa-user-circle"></i>
                        </label>
                        <input type="file"  id="file-input" />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder="Thomas"/>

                    <label >Email</label>
                    <input type="email" placeholder="Thomas@gmail.com"/>

                    <label >Password</label>
                    <input type="password" placeholder="***********"/>

                    <button className="settings-submit">UPDATE</button>
                </form>
            </div>
            <Sidebar/>
        </div>

    )
}
