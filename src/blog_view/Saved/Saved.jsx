import React from "react";
import Main from "../../home_view/main/Main";
import LogNavbar from "../navbar/navbar";
import Footer from "../Footer/Footer";

export default function SavedOrLiked(props) {
	return (
		<div className="CatPosts__container">
			<LogNavbar user={props.user} />
			<Main user={props.user} saved={true} />
		</div>
	);
}
