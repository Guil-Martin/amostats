import { API } from "../apis/amosAPI";
import { loginUser, logoutUser } from "../app/slices/userSlice";

export const serviceLoginUser = async (dispatch, userInput) => {
	try {
		const response = await API.post("login", userInput);
		if (response.status === 200) {
			const resData = response.data;
			const currentUserdata = setUpCurrentUser(resData.token, resData);
			dispatch(loginUser(currentUserdata));
		} else {
			throw new Error("Login error -", response.status);
		}
	} catch (error) {
		console.log("serviceLoginUser error -", error);
		return { error: true, message: error };
	}
};

export const serviceLogout = async (dispatch) => {
	dispatch(logoutUser());
};

const setUpCurrentUser = (token, resData) => {
	return {
		playerToken: token,
		playerId: resData.user_info.id,
		playerMail: resData.user_info.email,
		playerName: resData.user_info.name,
	};
};
