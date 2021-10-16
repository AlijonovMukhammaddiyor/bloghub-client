import React from "react";
import "../styles/login/login.css";
import google from "../resources/images/google-color.png";
import facebook from "../resources/images/facebook-square-color.png";
import apple from "../resources/images/apple.png";
import twitter from "../resources/images/twitter-color.png";
import email from "../resources/images/user.png";
import close from "../resources/images/close-line.png";
import { Link, useHistory } from "react-router-dom";

export default function Login(props) {
	let history = useHistory();

	return (
		<div className="login-background">
			<img id="login-icon-close" src={close} alt="" onClick={history.goBack} />
			<div className="login-container">
				<h1 id="login-title">Welcome Back.</h1>
				{/* <div className="login-btn-container"> */}
				<button className="signIn-btn google flex" href="#signin">
					<img id="login-icon-google" src={google} alt="" />
					Sign in with Goggle
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<button className="signIn-btn facebook flex" href="#signin">
					<img id="login-icon-facebook" src={facebook} alt="" />
					Sign in with Facebook
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<button className="signIn-btn apple flex" href="#signin">
					<img id="login-icon-apple" src={apple} alt="" />
					Sign in with Apple
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<button className="signIn-btn twitter flex" href="#signin">
					<img id="login-icon-twitter" src={twitter} alt="" />
					Sign in with Twitter
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<Link to="/signin/username">
					<button className="signIn-btn email flex" href="#signin">
						<img id="login-icon-email" src={email} alt="" />
						Sign in with Username
					</button>
				</Link>

				<p className="login-createOne">
					Do not have an account?{" "}
					<a href="/register" id="createAccountLink">
						Create One
					</a>
				</p>
			</div>
		</div>
	);
}
