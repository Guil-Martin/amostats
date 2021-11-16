import { createSlice } from "@reduxjs/toolkit";

const archamosSlice = createSlice({
	name: "archamos",
	initialState: {
		amosList: [],
		userList: [],
		locList: [],
		amosSingle: null,
	},
	reducers: {
		setAmosList: (state, action) => {
			return { ...state, amosList: [...action.payload] };
		},
		setAmosSingle: (state, action) => {
			return { ...state, amosSingle: action.payload };
		},
		setUserList: (state, action) => {
			return { ...state, userList: action.payload };
		},
		setLocList: (state, action) => {
			return { ...state, locList: action.payload };
		},
	},
});

export const {
	setAmosList,
	setAmosSingle,
	setUserList,
	setLocList,
	setAmosNewName,
} = archamosSlice.actions;
export default archamosSlice.reducer;
