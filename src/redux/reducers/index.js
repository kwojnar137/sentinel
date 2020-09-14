import { combineReducers } from "redux";
import { acceleration } from "./speed";
import { breaking } from "./breaking";
import { clutching } from "./clutching";
import { gear } from "./gear";

export default combineReducers({
  acceleration,
  breaking,
  clutching,
  gear,
});
