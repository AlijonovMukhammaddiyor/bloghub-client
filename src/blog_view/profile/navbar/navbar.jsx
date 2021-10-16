import React, { useState } from "react";
import "./styles/styles.css";
import logo from "../../../home_view/resources/images/logo_transparent2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = (props) => {
	const [burger, setBurger] = useState(true);

	function handleBurger() {
		if (burger) return faBars;
		else return faTimes;
	}

	function handleClick() {
		setBurger(!burger);
	}

	return (
		<div className="main__navbar">
			<div className="my__navbar">
				<div className="nav__header">
					<Link to="/bloghub">
						<img
							src={logo}
							alt=""
							style={{
								width: "40px",
								height: "40px",
								objectFit: "cover",
								position: "relative",
								zIndex: "1001",
							}}
						/>
					</Link>
				</div>
				<div className="nav__links">
					<Link to={`/new-blog`}>
						<p
							className="new__post"
							style={
								burger
									? { marginRight: "0", zIndex: "1001" }
									: { marginRight: "5px", zIndex: "1001" }
							}
						>
							+New Post
						</p>
					</Link>

					<a className="nav__link" href="/bloghub">
						Home
					</a>
					<Link to={`/post/tag?user=${props.user._id}`}>
						<p className="nav__link" href="/">
							My Posts
						</p>
					</Link>

					<a className="nav__link" href="/liked">
						Favourites
					</a>
					<a className="nav__link" href="/saved">
						Saved
					</a>
					<FontAwesomeIcon icon={handleBurger()} className="burger" onClick={handleClick} />
				</div>
			</div>
			<div className={burger ? "responsive__section" : "responsive__section open"}>
				<a href="/">Home</a>
				<a href="/">My Posts</a>
				<a href="/">Favourites</a>
				<a href="/">Saved</a>
			</div>
		</div>
	);
};

export default Navbar;
