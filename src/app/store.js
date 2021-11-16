import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import amosSlice from "./slices/amosSlice";

export const store = configureStore({
	reducer: {
		userSlice: userSlice,
		amosSlice: amosSlice,
	},
});
