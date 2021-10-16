import React, { useState, useEffect } from "react";
import "../../styles/main/sidebar/sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [cats, setCats] = useState([]);
	const [seeAll, setSeeAll] = useState(false);

	useEffect(() => {
		const getCats = async () => {
			let catss = await axios.get("https://bloghub-1.herokuapp.com/api/categories");
			if (catss.data.length > 0) setCats(Array.from(catss.data));
		};
		if (true) getCats();
	}, [cats]);

	function seeAllTopics() {
		setSeeAll(!seeAll);
	}

	return (
		<div className="sidebar__container">
			<h4 id="sidebar__title">DISCOVER MORE OF WHAT MATTERS TO YOU</h4>

			<div className="sidebar__filters">
				{seeAll
					? cats.map((cat, index) => {
							return (
								<Link key={index} to={`/post/tag?cat=${cat.name}`}>
									<p key={index} className="sidebar__filter" href="#page">
										{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
									</p>
								</Link>
							);
					  })
					: cats.slice(0, 6).map((cat, index) => {
							return (
								<Link key={index} to={`/post/tag?cat=${cat.name}`}>
									<p key={index} className="sidebar__filter" href="#page">
										{cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
									</p>
								</Link>
							);
					  })}
			</div>

			{!seeAll ? (
				<a onClick={seeAllTopics} href="#seeAll" id="sidebar__see__all">
					See all topics...
				</a>
			) : (
				<a onClick={seeAllTopics} href="#seeAll" id="sidebar__see__all">
					See less topics
				</a>
			)}

			<hr id="sidebar__hr" />

			<div className="sidebar__links">
				<a href="#help">Help</a>
				<a href="#status">Status</a>
				<a href="#writers">Writers</a>
				<a href="#blog">Blog</a>
				<a href="#careers">Careers</a>
				<a href="#privacy">Privacy</a>
				<a href="#terms">Terms</a>
				<a href="#about">About</a>
			</div>

			<div className="sidebar__promotion">
				<h2>Join millions of thers</h2>
				<p>Share your thoughts</p>
				<p>Grow your audience</p>
				<a href="/register">Start Writing</a>
			</div>
		</div>
	);
}
