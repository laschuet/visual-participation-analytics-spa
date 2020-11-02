import { configureStore } from "@reduxjs/toolkit";

import alertReducer from "./components/alert/alertSlice";

export default configureStore({
  reducer: {
    alert: alertReducer,
  },
});
