import React, { useState, useEffect } from "react";
import "../styles/profile/profile.css";
import Navbar from "./navbar/navbar";
import Post from "../../home_view/Filter/post/post";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";

export default function Profile(props) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			const res = await axios.get(
				`https://bloghub-1.herokuapp.com/api/posts?user=${props.user.username}`
			);
			if (res.data.length > 0) setPosts(res.data);
		};
		if (true) {
			getPosts();
		}
	}, [posts, props.user]);

	const PF = "https://bloghub-1.herokuapp.com/images/";

	return (
		<div className="profile__container">
			<Navbar user={props.user} />
			<div className="black__part"></div>
			<div className="edit__profile">
				<h2>{props.user.username}</h2>
				<img
					src={PF + props.user.profilePic}
					style={{ objectFit: "cover" }}
					alt=""
					className="profile__image"
				/>
				<p>{props.user.bio}</p>
				<Link to="/account/edit">
					<button>Edit Profile</button>
				</Link>
			</div>
			<div className="follow__info">
				<a href="#posts">My Activity</a>
				<a href="#following">Following</a>
				<a href="#follower">Followers</a>
			</div>

			<div className="recent__posts">
				<div
					style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}
				>
					<FontAwesomeIcon
						icon={faTag}
						style={{
							padding: "10px",
							width: "35px",
							height: "35px",
							borderRadius: "50%",
							backgroundColor: "lightgray",
						}}
					/>
					<h2>My Recent Post</h2>
				</div>

				<div className="posts">
					{posts.map((post, index) => {
						return <Post key={index} post={post} />;
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}
