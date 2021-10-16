import React, { useState, useContext } from "react";
import "../../styles/profile/profileEdit/edit.css";
import Navbar from "../../navbar/navbar";
import { Context } from "../../../context/Context";
import axios from "axios";

const ProfileEdit = (props) => {
	const [file, setFile] = useState(null);
	const [bio, setBio] = useState(props.user.bio);
	const [username, setUsername] = useState(props.user.username);
	const [email, setEmail] = useState(props.user.email);
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);

	const { dispatch } = useContext(Context);
	const PF = "https://bloghub-1.herokuapp.com/images/";

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("submitted");
		dispatch({ type: "UPDATE_START" });
		const updatedUser = {
			userId: props.user._id,
			username,
			email,
			bio,
			password,
		};
		if (file) {
			const data = new FormData();
			const filename = Date.now() + file.name;
			data.append("name", filename);
			data.append("file", file);
			updatedUser.profilePic = filename;
			try {
				await axios.post("https://bloghub-1.herokuapp.com/api/upload", data);
				console.log("success");
			} catch (err) {
				console.log(err.response.data);
			}
		}
		try {
			const res = await axios.put(
				`https://bloghub-1.herokuapp.com/api/user/${props.user._id}`,
				updatedUser
			);
			setSuccess(true);
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
		} catch (err) {
			dispatch({ type: "UPDATE_FAILURE" });
			console.log(err.response.data);
			console.log("Could not update the user.");
		}
	};

	function myFunction(e) {
		var x = document.getElementById("pass");
		if (e.target.checked) {
			x.type = "text";
		} else {
			x.type = "password";
		}
	}

	return (
		<>
			<Navbar user={props.user} />
			<div className="login-wrap" style={{}}>
				<form
					className="login-html"
					style={{ marginTop: "0", paddingTop: "10px" }}
					onSubmit={handleSubmit}
				>
					<input
						id="tab-1"
						type="radio"
						name="tab"
						onChange={(e) => {}}
						className="sign-in"
						checked
					/>
					<label htmlFor="tab-1" className="tab" style={{ color: "black", marginTop: "0" }}>
						Update
					</label>
					<input id="tab-2" type="radio" name="tab" className="sign-up" />
					<label htmlFor="tab-2" className="tab"></label>
					<div className="login-form">
						<div className="sign-in-htm">
							<div
								className="profile__pic"
								style={{
									textAlign: "center",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									gap: "0.5rem",
								}}
							>
								{file ? (
									<img
										style={{
											width: "80px",
											height: "80px",
											borderRadius: "50%",
											objectFit: "cover",
										}}
										className="pic"
										src={URL.createObjectURL(file)}
										alt=""
									/>
								) : (
									<img
										style={{
											width: "80px",
											height: "80px",
											borderRadius: "50%",
											objectFit: "cover",
										}}
										className="pic"
										src={PF + props.user.profilePic}
										alt=""
									/>
								)}

								<label htmlFor="fileInput">
									<p
										className="upload__button"
										style={{
											width: "12rem",
											display: "inline-block",
											borderRadius: "20px",
											margin: " 0 auto 1rem",
											padding: "5px 10px",
										}}
									>
										Update profile picture
									</p>
								</label>
								<input
									id="fileInput"
									type="file"
									style={{ display: "none" }}
									className="input__upload__pic"
									onChange={(e) => setFile(e.target.files[0])}
								/>
							</div>
							<div className="group">
								<label
									htmlFor="user"
									className="label"
									style={{ marginBottom: "0.5rem", color: "black" }}
								>
									Username
								</label>
								<input
									id="user"
									className="input"
									value={username}
									type="text"
									onChange={(e) => setUsername(e.target.value)}
									required
									style={{ fontSize: "1rem" }}
								/>
							</div>
							<div className="group">
								<label
									htmlFor="email"
									className="label"
									style={{ marginBottom: "0.5rem", color: "black" }}
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									className="input"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
									style={{ fontSize: "1rem" }}
								/>
							</div>
							<div className="edit__bio" style={{ marginBottom: "1rem" }}>
								<label htmlFor="bio" style={{ fontSize: "12px" }}>
									ABOUT
								</label>
								<div
									id="bio"
									contentEditable
									suppressContentEditableWarning={true}
									onInput={(e) => setBio(e.target.textContent)}
									style={{
										padding: "15px 20px",
										borderRadius: "25px",
										backgroundColor: "hsl(0, 0%, 97%)",
										marginTop: "0.5rem",
									}}
								>
									{bio}
								</div>
							</div>
							<div className="group">
								<label
									htmlFor="pass"
									className="label"
									style={{ marginBottom: "0.5rem", color: "black" }}
								>
									Password
								</label>
								<input
									id="pass"
									type="password"
									className="input"
									// data-type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
									minLength="6"
								/>
							</div>
							<div
								style={{
									display: "flex",
									justifyContent: "flex-start",
									alignItems: "center",
									width: "100%",
									gap: "0.5rem",
								}}
							>
								<input
									type="checkbox"
									id="show"
									onChange={myFunction}
									style={{ padding: "0", width: "min-content", borderRadius: "50%" }}
								/>
								<label htmlFor="show" style={{ fontSize: "12px" }}>
									Show Password
								</label>
							</div>
							<div className="group">
								<input
									type="submit"
									className="button"
									value="Update"
									style={{ marginTop: "2rem", cursor: "pointer", color: "white" }}
								/>
							</div>
							{success && (
								<span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>
									Profile has been updated...
								</span>
							)}
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ProfileEdit;
