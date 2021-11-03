import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "../styles/post/post.css";
import facebook from "../../home_view/resources/images/facebook-round-color.png";
import linkedin from "../../home_view/resources/images/linkedin-round-color.png";
import twitter from "../../home_view/resources/images/twitter-round-color.png";
import link from "../../home_view/resources/images/copy-link.png";
import Author from "../../home_view/Author/Author";
import emailIcon from "../../home_view/resources/images/email_plus.png";
import axios from "axios";
import reactRenderHtml from "react-render-html";
import { Link } from "react-router-dom";

export default function PostBody() {
	// const [show, setShow] = useState(false);
	const [post, setPost] = useState({});
	const [author, setAuthor] = useState({});

	const location = useLocation();
	const id = location.pathname.split("/")[2];

	useEffect(() => {
		let ismounted = true;
		const getPost = async () => {
			const res = await axios.get("https://bloghub-1.herokuapp.com/api/posts/" + id);
			if (res.data) {
				if (ismounted) setPost(res.data);
			}
		};
		if (ismounted) getPost();
		return () => {
			ismounted = false;
		};
	}, [post, id]);

	useEffect(() => {
		let ismounted = true;
		async function getUser() {
			if (post.title) {
				try {
					const user = await axios.get(
						`https://bloghub-1.herokuapp.com/api/user/` + post.author.id
					);
					if (user.data) if (ismounted) setAuthor(user.data);
				} catch (err) {
					console.log(err.response.data);
				}
			}
		}
		if (ismounted) getUser();
		return () => (ismounted = false);
	});

	return (
		<div className="post__body" style={{ minHeight: "100vh" }}>
			{post._id ? (
				<div className="post__body__container">
					<div className="post__body__header">
						<h1 className="post__body__title">{post.title}</h1>
						<p className="post__body__subtitle">{post.subtitle}</p>
						<div className="post__body__tags">
							<div className="post__body__author__part">
								{author.username ? (
									<img src={author.profilePic} alt="" id="profile-icon" />
								) : (
									<div
										style={{
											borderRadius: "50%",
											height: "50px",
											width: "50px",
											backgroundColor: "hsl(0, 0%, 93%)",
										}}
									></div>
								)}
								<Link to={`/post/tag?user=${author._id}`}>
									<p className="author__name">{author.username}</p>
								</Link>

								<p className="post_date">{new Date(post.createdAt).toDateString()}</p>
								<p className="interpunct">·</p>
								<p className="post_length">{post.length} min read</p>
							</div>
							<div className="post__header__share">
								<img className="social__icons facebook" src={facebook} alt="" />
								<img className="social__icons linkedin" src={linkedin} alt="" />
								<img className="social__icons twitter" src={twitter} alt="" />
								<img className="social__icons link" src={link} alt="" />
							</div>
						</div>
					</div>
					<div className="post__body__body">
						<img src={post.Img} alt="" />
						<div className={false ? "visible" : "notVisible"}>
							<div className="post__body__toolbox__inner">
								<Author
									author={author}
									profileIcon={author.profilePic}
									className="post__body__author__toolbox"
								/>
							</div>
						</div>

						<div className="post__body__content">{reactRenderHtml(post.content)}</div>

						<div className="post__body__final">
							<div>
								{post.category.map((category, index) => (
									<button key={index} className="post__body__categ__btn">
										{category}
									</button>
								))}
							</div>

							<div className="final__share">
								<img className="social__icons facebook" src={facebook} alt="" />
								<img className="social__icons linkedin" src={linkedin} alt="" />
								<img className="social__icons twitter" src={twitter} alt="" />
								<img className="social__icons link" src={link} alt="" />
							</div>
						</div>
						<hr />
						<div className="post__body__final__profile">
							<div className="profile__inner">
								{author.username ? (
									<img
										style={{ objectFit: "cover" }}
										src={author.profilePic}
										id="final__profilePic"
										alt=""
									/>
								) : (
									<div
										style={{
											borderRadius: "50%",
											height: "70px",
											width: "70px",
											backgroundColor: "hsl(0, 0%, 93%)",
										}}
									></div>
								)}

								<div>
									<p className="writtenBy">Written By</p>
									<a href="#author">
										<h2 className="final-profile-name">{author.username}</h2>
									</a>
									<p className="final-profile-bio" style={{ fontWeight: "lighter" }}>
										{author.bio}
									</p>
								</div>
							</div>
							<div>
								<div className="extra">
									<button className="nav__follow__btn">Follow</button>
									<p style={{ cursor: "pointer" }}>
										<img src={emailIcon} id="email__icon" alt="" />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
