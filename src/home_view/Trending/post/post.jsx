import React, { useState, useContext, useEffect } from "react";
import "../../styles/trending/post/post.css";
import Bookmark from "../../resources/images/bookmark.png";
import Author from "../../Author/Author";
import clapIco from "../../resources/images/clapping_white.png";
import clapIcoG from "../../resources/images/clapping_g.png";
import BookmarkSolid from "../../resources/images/bookmarkSolid.png";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
import axios from "axios";

export default function Post(props) {
	const [clap, setClap] = useState(false);
	const [saved, setSaved] = useState(false);
	const [author, setAuthor] = useState({});
	const [again, setAgain] = useState(false);

	const PF = "https://bloghub-1.herokuapp.com/images/";
	const { user, dispatch } = useContext(Context);

	useEffect(() => {
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
				setAuthor(user.data);
			}
			getUser();
		}
	}, [setClap, author, user, props.post]);

	const handleSubmitUnLike = async (e) => {
		dispatch({ type: "UPDATE_START" });
		const newLiked = user.liked.filter((item) => {
			const res = item.toString() !== props.post._id.toString();
			return res;
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

	useEffect(() => {
		const updateLiked = async () => {
			if (again) {
				setAgain(false);
				if (clap) await handleSubmitLiked();
				else await handleSubmitUnLike();
			}
		};
		updateLiked();
	});

	function renderClap(e) {
		if (clap) return clapIcoG;
		else return clapIco;
	}

	function renderBookmark(e) {
		return saved ? BookmarkSolid : Bookmark;
	}

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
		<div className="treding__post__container">
			<Link to={`/post/${props.post._id}`}>
				<div className="post__image">
					<img src={PF + props.post.Img} alt="" />
					<p className="post_sub_category_btn">{props.post.category[0]}</p>
				</div>
				<div className="post__header">
					<h1 className="post__title">{props.post.title}</h1>
				</div>

				<div className="post__subtitle">{props.post.subtitle}</div>
			</Link>
			<div className="post__author">
				<Link to={`/post/tag?user=${author._id}`} style={{ color: "black", fontWeight: "500" }}>
					By {props.post.author.name}
				</Link>
				{author.username && (
					<span id="profile__hoverbox">
						<Author author={author} profileIcon={author.profilePic} />
					</span>
				)}
			</div>
			<div className="post__footer">
				<div className="footer__left">
					<p id="post-date">{new Date(props.post.createdAt).toDateString()}</p>
					<p className="interpunct">·</p>
					<p className="post-read-length">{props.post.length} min read</p>
				</div>
				<div className="footer__right">
					<img onClick={handleClap} id="post__thumsUp" src={renderClap()} alt="" />
					<img src={renderBookmark()} id="post__bookmark" alt="" onClick={(e) => toggleSave(e)} />
				</div>
			</div>
		</div>
	);
}
