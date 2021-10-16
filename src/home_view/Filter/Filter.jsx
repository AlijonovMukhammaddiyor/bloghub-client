import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import "../styles/filter/filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Post from "./post/post";
import axios from "axios";
import Footer from "../../blog_view/Footer/Footer";

export default function Filter(props) {
	const [term, setTerm] = useState("");
	const [show, setShow] = useState(false);
	const [search_term, setSearchTerm] = useState("");
	const [posts, setPosts] = useState([]);

	// const PF = "https://bloghub-1.herokuapp.com/images/";

	useEffect(() => {
		const getPost = async () => {
			if (search_term !== "") {
				const res = await axios.get(`https://bloghub-1.herokuapp.com/api/posts?cat=${search_term}`);
				if (res.data) {
					setPosts(res.data);
				}
			}
		};
		getPost();
	}, [search_term]);

	function handleInput(e) {
		setTerm(e.target.value);
	}

	function handleEnter(e) {
		if (e.key === "Enter") {
			handleSearch(e);
		}
	}

	function handleSearch(e) {
		setShow(true);
		setSearchTerm(term);
		if (!term) setShow(false);
	}

	return (
		<>
			<div className="filtered__posts" style={{ minHeight: "95vh" }}>
				<Navbar user={props.user} />
				<div className="search">
					<h2>Search: </h2>
					<input
						onChange={handleInput}
						onKeyPress={handleEnter}
						value={term}
						className="search__term"
						name="search_term"
					></input>
					<div>
						<FontAwesomeIcon icon={faSearch} onClick={handleSearch} className="search__icon" />
					</div>
				</div>
				{show && (
					<div className="result__title">
						<h4>
							{" "}
							Search Results for <span className="search__term">{search_term}...</span>
						</h4>
						<hr />
						{posts.length === 0 && <p style={{ color: "gray" }}>Nothing found...</p>}
					</div>
				)}

				{posts.map((post, index) => {
					return <Post post={post} key={index} auth={false} />;
				})}
			</div>
			<Footer />
		</>
	);
}
