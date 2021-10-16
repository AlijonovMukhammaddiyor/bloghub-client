import React from "react";
import "../../styles/main/posts/posts.css";
import Post from "../post/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export default function Posts(props) {
	const PF = "http://localhost:4000/images/";
	return (
		<div className="recent__posts__container">
			<div className="recent__posts__header">
				{" "}
				{props.saved || props.liked ? (
					<>
						<h3
							className="title"
							style={{
								fontSize: "1.5rem",
							}}
						>
							<FontAwesomeIcon icon={faTags} className="tag__icon" />{" "}
							{props.saved ? "Saved Posts" : "Liked Posts"}{" "}
						</h3>
						<hr style={{ margin: "1rem 0" }} />
					</>
				) : props.options && !props.user ? (
					<h3
						className="title"
						style={{
							fontSize: "1.5rem",
						}}
					>
						<FontAwesomeIcon icon={faTags} className="tag__icon" />{" "}
						{props.options.charAt(0).toUpperCase() + props.options.slice(1)}{" "}
					</h3>
				) : props.user && props.options ? (
					<div className="author">
						<div className="left">
							<img
								src={PF + props.options.profilePic}
								style={{ obejectFit: "cover" }}
								className="profilePic"
								alt=""
							/>
							<h3 className="name">{props.options.username}</h3>
						</div>
						<div className="right">
							<p className="follow">Follow</p>
						</div>
					</div>
				) : (
					!props.forCat && (
						<div className="default">
							<FontAwesomeIcon icon={faClock} id="recent-icon" />
							<h3 className="title">
								Recent on <span id="blogHub"> BlogHub </span>{" "}
							</h3>{" "}
						</div>
					)
				)}
			</div>
			<div className="recent__posts">
				{" "}
				{props.posts.map((post, index) => {
					return <Post key={index} post={post} trending={false} />;
				})}{" "}
			</div>{" "}
		</div>
	);
}
