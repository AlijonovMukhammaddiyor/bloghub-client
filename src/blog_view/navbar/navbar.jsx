import React, { useState, useEffect } from "react";
import "../styles/navbar/navbar.css";
import imgUrlBloghub from "../../home_view/resources/images/logo_transparent2.png";
import bookmark from "../../home_view/resources/images/bookmark_curved.png";
import SearchIcon from "../../home_view/resources/images/search.png";
import axios from "axios";
import { Link } from "react-router-dom";
import Profilehoverbox from "../../home_view/profile_hoverbox/ProfileHoverbox";

export default function Navbar(props) {
	const [cats, setCats] = useState([]);
	const [profileHoverbox, setHoverbox] = useState(false);
	const PF = "https://bloghub-1.herokuapp.com/images/";

	useEffect(() => {
		const getCats = async () => {
			let catss = await axios.get("https://bloghub-1.herokuapp.com/api/categories");
			if (catss.data.length > 0) setCats(Array.from(catss.data).slice(0, 4));
		};
		if (true) {
			getCats();
		}
	}, [cats]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleScroll = () => {
		let yOffset = window.pageYOffset;
		return yOffset;
	};

	return (
		<div className="blog__navbar__container">
			<nav className="blog__navbar">
				<div className="brand_with_prompt">
					<Link to="/bloghub">
						<p className="brand__container" href="/bloghub">
							<img src={imgUrlBloghub} alt="" className="logo_b" />
						</p>
					</Link>
				</div>
				<div className="nav__items">
					{
						<div className="cats">
							{cats.map((cat, index) => {
								return (
									<Link key={index} to={`/post/tag?cat=${cat.name}`}>
										<p key={100} className="cat" key={index}>
											{cat.name.toUpperCase()}
										</p>
									</Link>
								);
							})}
						</div>
					}
					<Link to={"/post/filter"}>
						<img src={SearchIcon} alt="" className="search__icon" />
					</Link>

					<div>
						{props.user ? (
							<Link to="/saved">
								<img className="bookmark" src={bookmark} alt="" />
							</Link>
						) : (
							<Link to="/signin">
								<img className="bookmark" src={bookmark} alt="" />
							</Link>
						)}
					</div>
					{props.user ? (
						<div style={{ position: "relative" }}>
							<img
								src={PF + props.user.profilePic}
								alt=""
								className="logged__user"
								onClick={(e) => {
									setHoverbox(!profileHoverbox);
								}}
							/>
							<div className={profileHoverbox ? "hoverbox" : "close"}>
								<Profilehoverbox user={props.user} />
							</div>
						</div>
					) : (
						<a className="nav__sign__item" href="/signin">
							Sign In
						</a>
					)}
				</div>
			</nav>
		</div>
	);
}
