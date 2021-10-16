import React, { useContext } from "react";
import Main from "../main/Main";
import Navbar from "../home_navbar/home_navbar";
import LogNavbar from "../../blog_view/navbar/navbar";
import { Context } from "../../context/Context";

const Catposts = (props) => {
	const { user } = useContext(Context);
	return (
		<div className="CatPosts__container">
			{user ? <LogNavbar user={user} /> : <Navbar options={{ prompt: false }} user={user} />}
			<Main user={user} saved={false} liked={false} />
		</div>
	);
};

export default Catposts;
