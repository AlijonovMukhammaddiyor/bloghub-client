import React, { useState, useEffect, useContext } from "react";
import "../../styles/main/post/post.css";
import Author from "../../Author/Author";
import Bookmark from "../../resources/images/bookmark.png";
import BookmarkSolid from "../../resources/images/bookmarkSolid.png";
import { Link } from "react-router-dom";
import clapIco from "../../resources/images/clapping_white.png";
import clapIcoG from "../../resources/images/clapping_g.png";
import axios from "axios";
import { Context } from "../../../context/Context";

export default function Post(props) {
	const [saved, setSaved] = useState(false);
	const [clap, setClap] = useState(false);
	const [author, setAuthor] = useState({});
	const [again, setAgain] = useState(false);

	const PF = "https://bloghub-1.herokuapp.com/images/";

	const { user, dispatch } = useContext(Context);

	useEffect(() => {
		let ismounted = true;
		if (user) {
			if (user.liked.includes(props.post._id.toString())) {
				setClap(true);
			}
			if (user.saved.includes(props.post._id.toString())) {
				setSaved(true);
			}
		}
		if (!author.username) {
			async function getUser() {
				const user = await axios.get(
					`https://bloghub-1.herokuapp.com/api/user/` + props.post.author.id
				);
				if (ismounted) setAuthor(user.data);
			}
			if (ismounted) getUser();
		}
		return () => {
			ismounted = false;
		};
	}, [setClap, props, author, user]);

	const handleSubmitUnLike = async (e) => {
		dispatch({ type: "UPDATE_START" });
		const newLiked = user.liked.filter(function (item) {
			return item.toString() !== props.post._id.toString();
		});
		const updatedUser = {
			userId: user._id,
			liked: newLiked,
		};
		try {
			const res = await axios.put(
				`https://bloghub-1.herokuapp.com/api/user/${user._id}`,
				updatedUser
			);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			console.log(err.response.data);
			console.log("Could not update the user.");
		}
	};

	const handleSubmitUnSave = async (e) => {
		dispatch({ type: "UPDATE_START" });
		const newSaved = user.saved.filter(function (item) {
			return item.toString() !== props.post._id.toString();
		});
		const updatedUser = {
			userId: user._id,
			saved: newSaved,
		};

		try {
			const res = await axios.put(
				`https://bloghub-1.herokuapp.com/api/user/${user._id}`,
				updatedUser
			);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			console.log(err.response.data);
			console.log("Could not update the user.");
		}
	};

	const handleSubmitLiked = async (e) => {
		dispatch({ type: "UPDATE_START" });
		const userLiked = user.liked;
		let updatedUser = {};
		if (userLiked !== [] && !userLiked.includes(props.post._id.toString())) {
			updatedUser = {
				userId: user._id,
				liked: [...userLiked, props.post._id],
			};
		} else {
			updatedUser = {
				userId: user._id,
				liked: [props.post._id],
			};
		}
		try {
			const res = await axios.put(
				`https://bloghub-1.herokuapp.com/api/user/${user._id}`,
				updatedUser
			);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			console.log(err.response.data);
			console.log("Could not update the user.");
		}
	};

	const handleSubmitSave = async (e) => {
		dispatch({ type: "UPDATE_START" });
		const userSaved = user.saved;
		let updatedUser = {};
		if (userSaved !== [] && !userSaved.includes(props.post._id.toString())) {
			updatedUser = {
				userId: user._id,
				saved: [...userSaved, props.post._id],
			};
		} else {
			updatedUser = {
				userId: user._id,
				saved: [props.post._id],
			};
		}
		try {
			const res = await axios.put(
				`https://bloghub-1.herokuapp.com/api/user/${user._id}`,
				updatedUser
			);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			console.log(err.response.data);
			console.log("Could not update the user.");
		}
	};

	function renderClap(e) {
		if (clap) return clapIcoG;
		else return clapIco;
	}

	function renderBookmark(e) {
		return saved ? BookmarkSolid : Bookmark;
	}

	useEffect(() => {
		const updateLiked = async () => {
			if (again && user) {
				setAgain(false);
				if (clap) await handleSubmitLiked();
				else await handleSubmitUnLike();
			}
		};
		updateLiked();
	});

	function handleClap(e) {
		setAgain(true);
		setClap(!clap);
	}

	function toggleSave(e) {
		if (saved) {
			setSaved(false);
			e.target.src = Bookmark;
			if (user) handleSubmitUnSave(e);
		} else {
			setSaved(true);
			if (user) handleSubmitSave(e);
			e.target.src = BookmarkSolid;
		}
	}
	return (
		<div className="recent__post__card">
			<div className="recent__post__body">
				<div className="recent__post__header">
					{author.username ? (
						<div>
							<img id="profile-icon" src={PF + author.profilePic} alt="" />
						</div>
					) : (
						<div
							style={{
								width: "20px",
								height: "20px",
								borderRadius: "50%",
								backgroundColor: "hsl(0, 0%, 93%)",
							}}
						></div>
					)}

					{author.username ? (
						<div className="post__author">
							<Link to={`/post/tag?user=${author._id}`}>
								<h4 id="author__name">{author.username}</h4>
							</Link>
							<div id="profile__hoverbox">
								<Author author={author} profileIcon={author.profilePic} />
							</div>
						</div>
					) : (
						<div
							style={{ width: "4rem", height: "0.6rem", backgroundColor: "hsl(0, 0%, 93%)" }}
						></div>
					)}
				</div>

				<div className="recent__post__main">
					<Link to={`/post/${props.post._id}`}>
						<div className="recent__post__title">
							<h2>{props.post.title}</h2>
						</div>
					</Link>
					<div className="recent__post__subtitle">
						<Link to={`/post/${props.post._id}`}>
							<div className="post__subtitle">{props.post.subtitle}</div>
						</Link>
					</div>
				</div>

				<div className="recent__post__footer">
					<div className="subfooter__left">
						<p>{new Date(props.post.createdAt).toDateString()}</p>
						<p className="interpunct">·</p>
						<p className="post__length">{props.post.length} min</p>
						<p>·</p>
						<Link to={`/post/tag?cat=${props.post.category[0]}`}>
							<button className="post_sub_category_btn">{props.post.category[0]}</button>
						</Link>
					</div>
					<div className="subfooter__right">
						<img onClick={handleClap} src={renderClap()} alt="" className="thumpsUp" />
						<img src={renderBookmark()} alt="" onClick={(e) => toggleSave(e)} />
					</div>
				</div>
			</div>
			<div className="recent__post__img">
				<Link to={`/post/${props.post._id}`}>
					<div>
						<img src={PF + props.post.Img} alt="" />
					</div>
				</Link>
			</div>
		</div>
	);
}
