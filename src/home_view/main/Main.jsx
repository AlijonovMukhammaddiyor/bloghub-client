import React, { useState, useEffect } from "react";
import "../styles/main/main.css";
import Posts from "./posts/posts";
import Sidebar from "./sidebar/sidebar";
import axios from "axios";
import { useLocation } from "react-router";
import Footer from "../../blog_view/Footer/Footer";

export default function Main(props) {
	const [posts, setPosts] = useState([]);
	const [user, setUser] = useState(null);
	const location = useLocation();
	const [isTag, setIsTag] = useState(false);
	const search = location.search;
	const [isUser, setIsUser] = useState(false);
	const [targetSearch, setTargetSearch] = useState("");

	useEffect(() => {
		setIsTag(location.pathname.includes("tag"));
		if (isTag) {
			setIsUser(isTag && location.search.includes("user"));
			setTargetSearch(search.split("=")[1].replace("%20", " "));
		}

		const fetchPosts = async () => {
			if (props.saved) {
				const savedPosts = props.user.saved;
				let res = [];
				for (let i = 0; i < savedPosts.length; ++i) {
					const post = await axios.get(
						`https://bloghub-1.herokuapp.com/api/posts/${savedPosts[i]}`
					);
					res.push(post.data);
				}
				setPosts(res);
			} else if (props.liked) {
				const LikedPosts = props.user.liked;
				let res = [];
				for (let i = 0; i < LikedPosts.length; ++i) {
					const post = await axios.get(
						`https://bloghub-1.herokuapp.com/api/posts/${LikedPosts[i]}`
					);
					res.push(post.data);
				}
				setPosts(res);
			} else {
				if (isTag) {
					if (isUser) {
						const res = await axios.get(`https://bloghub-1.herokuapp.com/api/user/` + targetSearch);

						setUser(res.data);
						if (user) {
							const res = await axios.get(
								`https://bloghub-1.herokuapp.com/api/posts?user=${user.username}`
							);
							setPosts(res.data.reverse());
						}
					} else {
						const res = await axios.get(
							`https://bloghub-1.herokuapp.com/api/posts?cat=${
								search.split("=")[1].charAt(0).toLocaleLowerCase() + search.split("=")[1].slice(1)
							}`
						);
						setPosts(res.data.reverse());
					}
				} else {
					const res = await axios.get("https://bloghub-1.herokuapp.com/api/posts");
					setPosts(res.data.reverse());
				}
			}
		};
		fetchPosts();
	}, [isTag, user, isUser, location, props, search, targetSearch]);
	return (
		<>
			<div className="main__container" id="recents">
				<Sidebar />
				<Posts
					posts={posts}
					options={isTag ? (isUser ? user : targetSearch) : null}
					user={isUser}
					forCat={location.pathname.includes("tag")}
					saved={props.saved}
					liked={props.liked}
					author={user}
				/>
			</div>
			<Footer />
		</>
	);
}
