import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Input() {
	const [username, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [bio, setBio] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(false);
		try {
			console.log("hi 1");
			const res = await axios.post("http://localhost:4000/api/auth/user/register", {
				username,
				email,
				bio,
				password,
			});

			res.data && window.location.replace("/signin/username");
		} catch (err) {
			setError(true);
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
		<div className="login-wrap" style={{ height: "100vh" }}>
			<form
				className="login-html"
				style={{ marginTop: "0", paddingTop: "1rem" }}
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
					Sign Up
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
							<img
								src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
								alt=""
								className="pic"
								style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover" }}
							/>
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
									Upload profile picture
								</p>
							</label>
							<input
								id="fileInput"
								type="file"
								style={{ display: "none" }}
								className="input__upload__pic"
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
								onChange={(e) => setName(e.target.value)}
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
							></div>
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
								value="Sign Up"
								style={{ marginTop: "2rem", cursor: "pointer", color: "white" }}
							/>
						</div>
						{error && (
							<div style={{ textAlign: "center" }}>
								<span
									style={{
										borderRadius: "1rem",
										color: "red",
										marginTop: "10px",
										textAlign: "center",
									}}
								>
									These credentials already exist!
								</span>
							</div>
						)}
						<div className="foot-lnk" style={{ marginTop: "1rem" }}>
							<a href="#forgot" style={{ color: "black", marginRight: "1rem" }}>
								Already a member?
							</a>
							<Link to="/signin">
								<span
									style={{
										color: "green",
										fontSize: "1.2rem",
										textDecoration: "underline",
										cursor: "pointer",
									}}
								>
									Sign In
								</span>
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
