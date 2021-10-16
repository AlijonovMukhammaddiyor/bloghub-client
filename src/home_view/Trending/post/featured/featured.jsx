import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/trending/post/featured/featured.css";

export default function featured(props) {
	const PF = "http://localhost:4000/images/";
	return (
		<div className="featured__post">
			<Link to={`post/${props.post._id}`}>
				<div
					className="featured__post__container"
					style={{
						backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6)), url(${
							PF + props.post.Img
						})`,
					}}
				>
					<div className="featured__body">
						<h3>Featured Project</h3>
						<h1>{props.post.title}</h1>
					</div>
				</div>
			</Link>
		</div>
	);
}
