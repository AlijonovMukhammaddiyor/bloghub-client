import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/search/search.css";

export default function Search() {
	const [search, setState] = useState(false);

	function search_click() {
		setState(!search);
	}
	return (
		<div className="search__container">
			<div className="search__form">
				<input
					className={search ? "searching search__input" : "search__input"}
					type="text"
					placeholder={" Search..."}
				/>
				<button onClick={search_click}>
					<FontAwesomeIcon icon={faSearch} className="search__icon" />
				</button>
			</div>
		</div>
	);
}
