import React, { useState, useEffect } from "react";
import "../styles/hom_navbar/home_navbar.css";
import imgUrlBloghub from "../resources/images/logo_transparent2.png";

export default function Navbar(props) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		let yOffset = window.pageYOffset;
		setShow(yOffset > 30);
	};

	return (
		<div className={show ? "navbar-container active__scroll" : "navbar-container"}>
			<nav className="navbar">
				<div className="brand_with_prompt">
					<a className="brand__container" href="/bloghub">
						<img src={imgUrlBloghub} alt="" className="logo bloghub" />
						<h1 className="brandName" id="blogHub">
							logHub
						</h1>
					</a>

					{!show && props.options.prompt && (
						<div className="signup_prompt">
							<p>
								Sign up to unlock all features. <a href="/register">Sign Up</a>
							</p>
						</div>
					)}
				</div>
				<div className="nav-items">
					<a className={show ? " nav-item scroll-nav-item" : "nav-item"} href="/signin">
						Sign In
					</a>
				</div>
			</nav>
		</div>
	);
}
