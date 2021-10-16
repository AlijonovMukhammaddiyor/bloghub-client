import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "../styles/login/input/input.css";

export default function Input() {
	const [error, setError] = useState(false);

	const userRef = useRef(null);
	const passwordRef = useRef(null);
	const { user, dispatch, isFetching } = useContext(Context);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			setError(false);
			const res = await axios.post("https://bloghub-1.herokuapp.com/api/auth/user/login", {
				username: userRef.current.value,
				password: passwordRef.current.value,
			});
			console.log(res.data);
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
		} catch (err) {
			setError(true);
			dispatch({ type: "LOGIN_FAILURE" });
		}
	};

	console.log(user);

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
			<form className="login-html" style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
				<input
					id="tab-1"
					type="radio"
					name="tab"
					className="sign-in"
					onChange={(e) => {}}
					checked
				/>
				<label for="tab-1" className="tab" style={{ color: "black" }}>
					Sign In
				</label>
				<input id="tab-2" type="radio" name="tab" className="sign-up" />
				<label for="tab-2" className="tab"></label>
				<div className="login-form">
					<div className="sign-in-htm">
						<div className="group">
							<label
								for="user"
								className="label"
								style={{ marginBottom: "0.5rem", color: "black" }}
							>
								Username
							</label>
							<input id="user" type="text" className="input" ref={userRef} />
						</div>
						<div className="group">
							<label
								for="pass"
								className="label"
								style={{ marginBottom: "0.5rem", color: "black" }}
							>
								Password
							</label>
							<input id="pass" type="password" className="input" ref={passwordRef} />
						</div>
						<div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "12px" }}>
							<input type="checkbox" id="check" onChange={myFunction} />
							<label htmlFor="check">Show password</label>
						</div>
						<div className="group">
							<button
								type="submit"
								className="button login"
								style={{ marginTop: "3rem", cursor: "pointer", color: "white" }}
								disabled={isFetching}
							>
								Sign In
							</button>
						</div>
						{error && (
							<div style={{ color: "red", textAlign: "center" }}>
								Wrong credentials! Please check it again!
							</div>
						)}
						<div className="hr"></div>
						<div className="foot-lnk">
							<a href="#forgot" style={{ color: "black", marginRight: "1rem" }}>
								Do not have an account?
							</a>
							<Link to="/register/username">
								<span
									style={{
										color: "green",
										fontSize: "1.2rem",
										textDecoration: "underline",
										cursor: "pointer",
									}}
								>
									Create One
								</span>
							</Link>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}
