import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
	name: "chart",
	initialState: {
		chartData: null,
	},
	reducers: {
		setData: (state, action) => {
			return {
				...state,
				chartData: {
					type: action.payload.type,
					data: action.payload.data,
					options: action.payload.options,
				},
			};
		},
	},
});

export const { setData } = chartSlice.actions;
export default chartSlice.reducer;
