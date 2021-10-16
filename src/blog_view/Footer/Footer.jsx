import React from "react";
import "../styles/footer/footer.css";

export default function Footer() {
	return (
		<div className="site__footer__container">
			<h1 id="blogHub">BlogHub</h1>
			<div className="links">
				<a href="/about">About</a>
				<a href="/help">Help</a>
				<a href="/contact">Contact</a>
			</div>
		</div>
	);
}
