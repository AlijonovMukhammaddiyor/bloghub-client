import React, { useState, useEffect } from "react";
import "../styles/trending/trending.css";
import Post from "./post/post";
import Featured from "./post/featured/featured";
import axios from "axios";

export default function Trending() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await axios.get("http://localhost:4000/api/posts");
			setPosts(res.data);
			if (res.data.length > 5) {
				setPosts(Array.from(res.data).slice(0, 5));
			}
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<div className="trending-container" id="trending">
				<div className="trending__title">
					{/* <FontAwesomeIcon icon={faStar} id="star__icon" /> */}
					<h3 className="title">
						Trending on <span id="blogHub">Bloghub</span>
					</h3>
				</div>
				{posts.length > 0 && (
					<div className="trending__body">
						<Featured post={posts[0]} className="featured" />
						<Post post={posts[1]} className="first__trending__post" />
						{posts.slice(2).map((post, index) => {
							return <Post key={index} post={post} />;
						})}
					</div>
				)}
			</div>
			<hr />
		</div>
	);
}
