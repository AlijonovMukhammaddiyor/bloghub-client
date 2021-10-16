import React from "react";
import "../styles/register/register.css";
import google from "../resources/images/google-color.png";
import facebook from "../resources/images/facebook-square-color.png";
import apple from "../resources/images/apple.png";
import twitter from "../resources/images/twitter-color.png";
import email from "../resources/images/email.png";
import close from "../resources/images/close-line.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
	let history = useHistory();
	return (
		<div className="login-background">
			<div className="login-container">
				<img id="login-icon-close" src={close} alt="" onClick={history.goBack} />
				<h1 id="login-title">Welcome</h1>
				{/* <div className="login-btn-container"> */}
				<button
					style={{ display: "flex", alignItems: "center" }}
					className="signIn-btn google"
					href="#signin"
				>
					<img id="login-icon-google" src={google} alt="" />
					Sign up with Goggle
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<button
					style={{ display: "flex", alignItems: "center" }}
					className="signIn-btn facebook"
					href="#signin"
				>
					<img id="login-icon-facebook" src={facebook} alt="" />
					Sign up with Facebook
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<button
					style={{ display: "flex", alignItems: "center" }}
					className="signIn-btn apple"
					href="#signin"
				>
					<img id="login-icon-apple" src={apple} alt="" />
					Sign up with Apple
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<button
					style={{ display: "flex", alignItems: "center" }}
					className="signIn-btn twitter"
					href="#signin"
				>
					<img id="login-icon-twitter" src={twitter} alt="" />
					Sign up with Twitter
				</button>
				{/* </div>
			<div className="login-btn-container"> */}
				<Link to="/register/username">
					<button
						style={{ display: "flex", alignItems: "center", padding: "10px 72px 10px 52px" }}
						className="signIn-btn email"
						href="#signin"
					>
						<img
							id="login-icon-email"
							style={{ objectFit: "contain", width: "20px", height: "20px" }}
							src={email}
							alt=""
						/>
						Sign up with Email
					</button>
				</Link>

				<p className="login-info">
					Click “Sign Up” to agree to <span id="blogHub">BlogHub</span>’s{" "}
					<a href="#termsAndService" id="termsAndService-link">
						Terms of Service
					</a>{" "}
					and acknowledge that <span id="blogHub">BlogHub</span>’s
					<a href="privacyPolicy" id="privacyPolicy-link">
						Privacy Policy
					</a>{" "}
					applies to you.
				</p>
			</div>
		</div>
	);
}
