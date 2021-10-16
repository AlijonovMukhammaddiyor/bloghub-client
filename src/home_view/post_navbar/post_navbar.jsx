import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/post_navbar/post_navbar.css";
// import Search from "../search/Search";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostNavbar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		if (cats.length === 0) {
			const getCats = async () => {
				let catss = await axios.get("http://localhost:4000/api/categories");
				let arr = Array.from(catss.data).slice(0);
				if (arr.length > 10) {
					arr = arr.slice(0, 10);
				}
				setCats(arr);
			};
			getCats();
		}
	}, [cats]);

	return (
		<div className="post__nav">
			<div className="post__navbar__container">
				<a href="#trending">Trending</a>
				<a href="#recents">Recent</a>
				<div className="dropdown">
					<button className="dropbtn">
						<p>Categories</p>
						<FontAwesomeIcon id="down__icon" icon={faCaretDown} />
					</button>
					<div className="dropdown__content" style={{ padding: "10px" }}>
						{cats.map((cat, index) => {
							return (
								<Link key={index} to={`/post/tag?cat=${cat.name}`}>
									<p key={index} href="/posts/">
										{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
									</p>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
