import React, { useState, useEffect } from "react";
import "../styles/trending/trending.css";
import Post from "./post/post";
import Featured from "./post/featured/featured";
import axios from "axios";

export default function Trending() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		let ismounted = true;
		const fetchPosts = async () => {
			const res = await axios.get("https://bloghub-1.herokuapp.com/api/posts");
			if (res.data.length > 0) if (ismounted) setPosts(res.data);
			if (res.data.length > 5) {
				if (ismounted) setPosts(Array.from(res.data).slice(0, 5));
			}
		};
		if (ismounted) fetchPosts();
		return () => {
			ismounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				{posts && posts.length > 1 && (
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
