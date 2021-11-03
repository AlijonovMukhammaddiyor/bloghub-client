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
	// const [update, setUpdate] = useState(null);
	const location = useLocation();
	console.log(location.pathname);
	const isTag = location.pathname.includes("tag");
	const search = location.search;
	let isUser = null;
	let targetSearch = null;
	if (search) {
		targetSearch = search.split("=")[1].replace("%20", " ");
		isUser = location.search.includes("user=");
	}
	console.log(isTag, isUser, targetSearch);

	useEffect(() => {
		// let ismount = true;
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
				} else {
					const res = await axios.get("https://bloghub-1.herokuapp.com/api/posts");
					setPosts(res.data.reverse());
				}
			}
		};
		if (posts.length === 0) fetchPosts();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	});

	useEffect(() => {
		const fetchPostsByAuthor = async () => {
			console.log(targetSearch, "hi");
			const res = await axios.get(`https://bloghub-1.herokuapp.com/api/user/` + targetSearch);

			setUser(res.data);
			if (user) {
				const res = await axios.get(
					`https://bloghub-1.herokuapp.com/api/posts?user=${user.username}`
				);
				setPosts(res.data.reverse());
			}
		};

		if (isTag) {
			if (isUser) {
				fetchPostsByAuthor();
			}
		}
	}, [isTag, isUser, targetSearch, user]);

	useEffect(() => {
		const fetchPostsByTag = async () => {
			if (isTag) {
				const res = await axios.get(
					`https://bloghub-1.herokuapp.com/api/posts?cat=${
						search.split("=")[1].charAt(0).toLocaleLowerCase() + search.split("=")[1].slice(1)
					}`
				);
				setPosts(res.data.reverse());
			}
		};
		if (isTag) {
			if (!isUser) {
				fetchPostsByTag();
			}
		}
	}, [isTag, isUser, search]);

	console.log(posts);
	return (
		<>
			<div className="main__container" style={{ minHeight: "90vh" }} id="recents">
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
