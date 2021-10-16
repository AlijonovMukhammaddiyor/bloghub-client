import React from "react";
import HomeNavbar from "../home_navbar/home_navbar";
import Home from "../Home/Home";
import Trending from "../Trending/trending";
import PostNavbar from "../post_navbar/post_navbar";
import MainHome from "../main/Main";
import Navbar from "../../blog_view/navbar/navbar";

const Mainhome = (props) => {
	return (
		<div>
			{props.user ? (
				<>
					<Navbar user={props.user} home={true} key={1} />
					<PostNavbar key={2} />
					<Trending key={3} />
					<MainHome key={4} saved={false} liked={false} />
				</>
			) : (
				<>
					<HomeNavbar options={{ prompt: true }} key={0} />
					<Home key={1} />
					<PostNavbar key={2} />
					<Trending key={3} />
					<MainHome key={4} saved={false} liked={false} />
				</>
			)}
		</div>
	);
};

export default Mainhome;
