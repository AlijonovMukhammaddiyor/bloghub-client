import React from "react";
import imgUrlBloghub from "../resources/images/logo_transparent2.png";
import imgUrlMedium from "../resources/images/7572997.png";
import "../styles/home/home.css";
// import Button from "./button";

export default function Home() {
	return (
		<div className="header-container">
			<div className="logos">
				<img src={imgUrlMedium} alt="" className="logo" />
				<span id="logoPlus">+</span>
				<img src={imgUrlBloghub} alt="" className="logo bloghub" />
			</div>
			<h1 className="siteTitle">
				<span id="blogHub">BlogHub</span> is a place to write, read, and connect
			</h1>
			<p className="header-subtitle">
				It's <span id="easyFree">easy</span> and <span id="easyFree">free</span> to post your
				thinking on any topic and connect with millions of readers.
			</p>
			<a className="getStarted-btn" href="/register">
				Get Started - <span>It is free</span> &rarr;
			</a>
		</div>
	);
}
