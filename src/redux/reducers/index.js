import { combineReducers } from "redux";
import { acceleration } from "./acceleration";
import { breaking } from "./breaking";
import { clutching } from "./clutching";
import { gear } from "./gear";
import { speed } from "./speed";
import { rpm } from "./rpm";
import { signposts } from "./signposts";

export default combineReducers({
  acceleration,
  breaking,
  clutching,
  gear,
  speed,
  rpm,
  signposts,
});
