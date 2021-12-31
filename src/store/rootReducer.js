import { combineReducers } from "redux";
import globalReducer from "./globalState";
import homeReducer from "../page/home/reducer"

const rootReducer = combineReducers({
	main: globalReducer,
	home:homeReducer
});

export default rootReducer;
