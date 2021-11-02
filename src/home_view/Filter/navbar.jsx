import React, { useState, useContext } from "react";
// import logo from "../resources/images/logo_transparent2.png";
import logo from "../resources/images/logo_transparent2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Profilehoverbox from "../profile_hoverbox/ProfileHoverbox";
import { Context } from "../../context/Context";

const Navbar = (props) => {
	const [burger, setBurger] = useState(true);
	const [profileHoverbox, setHoverbox] = useState(false);

	const PF = "https://bloghub-1.herokuapp.com/images/";

	const { user } = useContext(Context);

	function handleBurger() {
		if (burger) return faBars;
		else return faTimes;
	}

	function handleClick() {
		setBurger(!burger);
	}
	function isProfilePic(e) {
		if (e.includes("https://www.pixsy.com")) return false;
		return true;
	}

	return (
		<div className="main__navbar">
			<div className="my__navbar">
				<div className="nav__header">
					<img src={logo} alt="" className="b__logo" style={{ borderRadius: "0", width: "40px" }} />
				</div>
				<div className="nav__links">
					<a href="/" className="nav__link">
						Home
					</a>
					<Link to={props.user ? `/saved` : `/signin`}>
						<p className="nav__link">Saved Posts</p>
					</Link>
					<Link to={props.user ? `/liked` : `/signin`}>
						<p className="nav__link">Favourites</p>
					</Link>

					{props.user ? (
						<div>
							<img
								src={isProfilePic(user.profilePic) ? PF + user.profilePic : user.profilePic}
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
						<Link to="/signin">
							<span href="/signin" className="signin">
								Sign In
							</span>
						</Link>
					)}
					<FontAwesomeIcon icon={handleBurger()} className="burger" onClick={handleClick} />
				</div>
			</div>
			<div className={burger ? "responsive__section" : "responsive__section open"}>
				{!props.user && <a href="/login">Sign In</a>}
				<a href="/">Home</a>
				<a href="/saved">Saved Posts</a>
				<a href="/liked">Favourites</a>
			</div>
		</div>
	);
};

export default Navbar;
