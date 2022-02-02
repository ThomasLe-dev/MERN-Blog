import "./login.css"
import { Link } from "react-router-dom"
export default function Login() {
    return (
        <div className="login">
            <span className="login-title">Login</span>
        <form className="login-form">
            <label>Email</label>
            <input type="email" placeholder="abc@gmail.com"/>
            <label>Password</label>
            <input type="password" placeholder="*************"/>
            <button className="login-button">
                Login
            </button>
        </form>
            <button className="register-btn">
                <Link className="link" to="/register">REGISTER</Link>
            </button>
        </div>
  )
}
