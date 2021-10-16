import React, { useState, useEffect } from "react";
import Navbar from "../navbar/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import posts from "../../../home_view/resources/posts";
import Post from "../../../home_view/Filter/post/post";

export default function Filter() {
	const [term, setTerm] = useState("");
	const [show, setShow] = useState(false);
	const [search_term, setSearchTerm] = useState("");

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
		<div className="filtered__posts">
			<Navbar />
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
						Search Results for <span className="search__term">{search_term}</span>
					</h4>
					<hr />
				</div>
			)}

			{posts.map((post, index) => {
				return <Post post={post} key={index} auth={true} />;
			})}
		</div>
	);
}
