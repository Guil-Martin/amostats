import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { serviceLoginUser } from "../services/userService";
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";

const Login = () => {
	const dispatch = useDispatch();
	const [mailInput, setMailInput] = useState("");
	const [passwordInput, setPasswordInput] = useState("");

	const [loading, setLoading] = useState("");

	const handleSubmit = async (e) => {
		setLoading("Login...");
		e.preventDefault();
		await serviceLoginUser(dispatch, {
			email: mailInput,
			password: passwordInput,
		});
		setLoading("");
	};

	if (loading !== "")
		return (
			<div className={"loadingIndicator"}>
				<div className={"loadingIndicatorTxt"}>Loading...</div>
				<Dots color={"white"} />
			</div>
		);

	return (
		<div className={"container"}>
			<form onSubmit={handleSubmit} className={"formLogin"}>
				<label className={"mailInput"}>
					Mail:
					<input
						type="text"
						value={mailInput}
						onChange={(e) => setMailInput(e.target.value)}
						placeholder={"Enter your mail"}
					/>
				</label>
				<label className={"passwordInput"}>
					Password:
					<input
						type="password"
						value={passwordInput}
						onChange={(e) => setPasswordInput(e.target.value)}
						placeholder={"Enter your password"}
					/>
				</label>
				<input type="submit" value="Login" className={"loginInputBtn"} />
			</form>
		</div>
	);
};

export default Login;
