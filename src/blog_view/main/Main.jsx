import React, { useContext } from "react";
import Navbar from "../navbar/navbar";
import Body from "../post/post";
import posts from "../../home_view/resources/posts";
import { Context } from "../../context/Context";
import Footer from "../Footer/Footer";

const Main = () => {
	const { user } = useContext(Context);
	return (
		<div className="main__blog__container">
			<Navbar user={user} home={false} />
			<Body post={posts[0]} />
			<Footer />
		</div>
	);
};

export default Main;
