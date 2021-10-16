import React, { useEffect, useContext, useState } from "react";
import "../../styles/filter/post/post.css";
import { useResizeDetector } from "react-resize-detector";
import Bookmark from "../../resources/images/bookmark.png";
import BookmarkSolid from "../../resources/images/bookmarkSolid.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import clapIco from "../../resources/images/clapping_white.png";
import clapIcoG from "../../resources/images/clapping_g.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";

export default function Post(props) {
	const [style, setStyle] = useState({});
	const [clap, setClap] = useState(false);
	const [options, setOptions] = useState(false);
	const [author, setAuthor] = useState(null);
	const [success, setSuccess] = useState(false);
	const [saved, setSaved] = useState(false);
	const [again, setAgain] = useState(false);

	const { user, dispatch } = useContext(Context);

	const PF = "http://localhost:4000/images/";

	useEffect(() => {
		if (user) {
			if (user.liked.includes(props.post._id.toString())) {
				setClap(true);
			}
			if (user.saved.includes(props.post._id.toString())) {
				setSaved(true);
			}
		}
		async function getUser() {
			const user = await axios.get(`http://localhost:4000/api/user/` + props.post.author.id);
			if (user.data.length > 0) setAuthor(user.data);
		}
		getUser();
	}, [setClap, author, user, props.post]);

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
			const res = await axios.put(`http://localhost:4000/api/user/${user._id}`, updatedUser);
			setSuccess(true);
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
			const res = await axios.put(`http://localhost:4000/api/user/${user._id}`, updatedUser);
			setSuccess(true);
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
			const res = await axios.put(`http://localhost:4000/api/user/${user._id}`, updatedUser);
			setSuccess(true);
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
			const res = await axios.put(`http://localhost:4000/api/user/${user._id}`, updatedUser);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			console.log(err.response.data);
			console.log("Could not update the user.");
		}
	};

	const { width, ref } = useResizeDetector();

	useEffect(() => {
		if (window.innerWidth <= 800) setStyle({ width: width, height: 0.4 * width });
		else setStyle({});
	}, [width]);

	function renderClap(e) {
		if (clap) return clapIcoG;
		else return clapIco;
	}

	function renderBookmark(e) {
		return saved ? BookmarkSolid : Bookmark;
	}

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

	function handleClap(e) {
		setAgain(true);
		setClap(!clap);
	}

	function handleOptions() {
		setOptions(!options);
	}

	function toggleSave(e) {
		if (saved) {
			setSaved(false);
			handleSubmitUnSave(e);
			e.target.src = Bookmark;
		} else {
			setSaved(true);
			handleSubmitSave(e);
			e.target.src = BookmarkSolid;
		}
	}

	return (
		<div ref={ref} className="post__filter">
			{author && (
				<>
					<div className="post__filter__body">
						<div className="post__filter__author">
							<div className="post__filter__author__inner">
								<img src={PF + author.profilePic} alt="" className="profile__icon" />
								<div>
									<Link to={`/post/tag?user=${author._id.toString()}`}>
										<p className="author__name">{author.username}</p>
									</Link>

									<div className="small__footer">
										<p className="post__date">{new Date(props.post.createdAt).toDateString()}</p>
										<p>·</p>
										<p className="post__length">{props.post.length} min read</p>
									</div>
								</div>
							</div>

							{user._id === props.post.author.id && (
								<div className="delete__post" onClick={handleOptions}>
									<FontAwesomeIcon icon={faCog} className={options ? "cog clicked" : "cog"} />
									<div
										className="options"
										style={
											options
												? {
														zIndex: "10",
														backgroundColor: "white",
														right: "-2rem",
												  }
												: { visibility: "hidden" }
										}
									>
										<a href="//">Edit</a>
										<a href="//">Delete</a>
									</div>
								</div>
							)}
						</div>
					</div>
					<div className="post__filter__img">
						<Link to={`/post/${props.post._id}`}>
							<img src={PF + props.post.Img} alt="" className="post__img" style={style} />
						</Link>
					</div>
					<div className="post__filter__title">
						<h1 className="post__title">{props.post.title}</h1>
						<p className="read__more">Read more...</p>
					</div>
					<div className="post__filter__footer">
						<div className="claps">
							<img onClick={handleClap} src={renderClap()} alt="" className="clap__icon" />
							<p>1252</p>
							<div className="cats">
								<a href="//" className="category">
									{props.post.category[0]}
								</a>
							</div>
						</div>
						<div className="saves">
							<p className="save__number">Saved 100 times</p>
							<img
								src={renderBookmark()}
								alt=""
								onClick={(e) => toggleSave(e)}
								className="bookmark"
							/>
						</div>
					</div>
					<hr />
				</>
			)}
		</div>
	);
}
