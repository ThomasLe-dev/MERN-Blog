import "./register.css"
import { Link } from "react-router-dom"
export default function Register() {
    return (
        <div className="register">
            <span className="register-title">Register</span>
        <form className="register-form">
            <label>Username</label>
            <input type="email" placeholder="Enter your username"/>
            <label>Email</label>
            <input type="email" placeholder="abc@gmail.com"/>
            <label>Password</label>
            <input type="password" placeholder="*************"/>
            <button className="register-button">Register</button>
        </form>
            <button className="login-btn">
                <Link className="link" to="/login">LOGIN</Link>
            </button>
        </div>
  )
}
