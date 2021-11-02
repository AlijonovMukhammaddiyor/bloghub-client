import React from "react";
import "../styles/author/author.css";

function follower_int_to_k(number) {
	if (number < 1000) return number;
	else if (number >= 1000 && number < 1000000000) {
		return number / 1000.0 + "k";
	} else return number / 1000000000.0 + "M";
}

export default function Author(props) {
	const PF = "https://bloghub-1.herokuapp.com/images/";

	function isProfilePic(e) {
		if (e && e.includes("https://www.pixsy.com")) return false;
		return true;
	}
	return (
		<div className="author-hoverbox">
			<div className="author-hoverbox-header">
				<div>
					<img
						id="profile-icon"
						src={isProfilePic(props.profileIcon) ? PF + props.profileIcon : props.profileIcon}
						alt=""
					/>
				</div>
				<a href="#author-page">
					<h4 style={{ color: "green", fontFamily: "Ubuntu" }}>{props.author.username}</h4>
				</a>
			</div>
			{props.author.bio !== "" && (
				<p id="bio" style={{ fontWeight: "lighter" }}>
					{props.author.bio}
				</p>
			)}
			<hr />
			<div className="author-hoverbox-footer">
				{props.author.followers > 0 ? (
					<span>{follower_int_to_k(props.author.followers)} Followers</span>
				) : (
					<span>0 Followers</span>
				)}
				<button className="hoverbox-follow-btn">Follow</button>
			</div>
		</div>
	);
}
