import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import amosSlice from "./slices/amosSlice";
import chartSlice from "./slices/chartSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice,
		amosSlice: amosSlice,
		chartSlice: chartSlice,
	},
});
