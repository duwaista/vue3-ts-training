import { IPostItem } from "../../../types/posts";
import * as actions from "./actions";
import * as mutations from "./mutations";

interface IState {
  posts: IPostItem[];
}

const state: IState = {
  posts: [],
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}