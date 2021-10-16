import React, { useContext } from "react";
import "../styles/profile_hoverbox/profile_hoverbox.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Profilehoverbox = (props) => {
	const { user, dispatch } = useContext(Context);
	const handleLogout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<div className="profile__hoverbox">
			<Link to={`/account?user=${props.user._id}`}>
				<p>Profile</p>
			</Link>

			<hr id="hr" />
			<Link to={`/account?user=${props.user._id}/edit`}>
				<p className="edit__profile">Edit Profile</p>
			</Link>
			<Link to={`/new-blog`}>
				<p className="edit__profile">Write</p>
			</Link>
			<Link to={`/post/tag?user=${user._id}`}>
				<p>Posts</p>
			</Link>
			<hr id="hr" />
			<Link to="/bloghub">
				<p id="sign__out" onClick={handleLogout}>
					Sign Out
				</p>
			</Link>
		</div>
	);
};

export default Profilehoverbox;
