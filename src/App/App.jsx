//eslint-disable no-unused-vars
import React from "react";
import MainHome from "../home_view/MainHome/mainHome";
import "../home_view/styles/app/app.css";
import MainBlog from "../blog_view/main/Main";
import Write from "../blog_view/write/write";
import Profile from "../blog_view/profile/profile";

import ProfileEdit from "../blog_view/profile/edit/profileEdit";
import Login from "../home_view/login/login";
import Register from "../home_view/register/register";
import Input from "../home_view/register/input";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Filter from "../home_view/Filter/Filter";
import Catposts from "../home_view/CatPosts/CatPosts";
import { useContext } from "react";
import { Context } from "../context/Context";
import LoginInput from "../home_view/login/input";
import Saved from "../blog_view/Saved/Saved";
import Liked from "../blog_view/Liked/Liked";

export default function App() {
	const { user } = useContext(Context);

	return (
		<Router>
			<Switch>
				<Route exact path="/bloghub">
					<MainHome user={user} />
				</Route>
				<Route exact path="/signin">
					{user ? <Redirect to="/bloghub" /> : <Login />}
				</Route>
				<Route path="/signin/username">{user ? <Redirect to="/bloghub" /> : <LoginInput />}</Route>
				<Route exact path="/register">
					{user ? <Redirect to="/bloghub" /> : <Register />}
				</Route>
				<Route exact path="/register/username">
					{user ? <Redirect to="/bloghub" /> : <Input />}
				</Route>
				<Route exact path="/post/tag">
					<Catposts />
				</Route>
				<Route exact path="/post/filter">
					<Filter user={user} />
				</Route>
				<Route exact path="/post/:postId">
					<MainBlog />
				</Route>
				<Route exact path={`/new-blog`}>
					{user ? <Write user={user} /> : <Redirect to="/signin" />}
				</Route>
				<Route exact path={`/account`}>
					{user ? <Profile user={user} /> : <Redirect to="/signin" />}
				</Route>

				<Route exact path={`/account/edit`}>
					{user ? <ProfileEdit user={user} /> : <Redirect to="/signin" />}
				</Route>

				<Route exact path={`/saved`}>
					{user ? <Saved user={user} /> : <Redirect to="/signin" />}
				</Route>

				<Route exact path={`/liked`}>
					{user ? <Liked user={user} /> : <Redirect to="/signin" />}
				</Route>
			</Switch>
		</Router>
	);
}
