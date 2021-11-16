import { API } from "../apis/amosAPI";
import {
	setAmosList,
	setAmosSingle,
	setAmosNewName,
} from "../app/slices/amosSlice";

export const serviceGetAllAmos = async (dispatch, currentUser) => {
	try {
		const response = await API.get(`amos`, {
			headers: { Authorization: "Bearer " + currentUser.playerToken },
		});
		if (response.status === 200) {
			dispatch(setAmosList(response.data));
		} else {
			throw new Error("API get amos list status -> " + response.status);
		}
	} catch (error) {
		console.log("serviceGetAllAmos error:", error.toString());
	}
};

export const serviceGetAmosUser = async (dispatch, currentUser) => {
	try {
		const response = await API.get(
			`amos/find/user/?user_id=${currentUser.playerId}`,
			{
				headers: { Authorization: "Bearer " + currentUser.playerToken },
			}
		);
		if (response.status === 200) {
			// let newList = [];
			// for (const amos of response.data) {
			// 	let amm = new Amos(amos).serialize();
			// 	newList.push(amm);
			// }
			dispatch(setAmosList(response.data));
		} else {
			throw new Error("API get amos list status -> " + response.status);
		}
	} catch (error) {
		console.log("serviceGetAmosUser error:", error.toString());
	}
};