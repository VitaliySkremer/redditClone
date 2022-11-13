import {IUserData} from "../hooks/useUserData";
import {IPostData} from "./posts/typePosts";

export type MeState = {
  loading: boolean;
  error: string;
  data: IUserData;
};

export type postsState = {
  loading: boolean;
  error: string;
  data: IPostData[];
}

export type RootState = {
  token: string;
  commentText: string;
  me: MeState;
  posts: postsState;
  nextAfter: string;
  countLoad: number;
  firstLoaded: boolean;
  emptyFetch: boolean
}

export const initialState:RootState = {
  token:'',
  commentText: '',
  me: {
    loading: false,
    error: '',
    data: {}
  },
  posts:{
    loading: false,
    error: '',
    data: []
  },
  nextAfter: '',
  countLoad: 0,
  firstLoaded: true,
  emptyFetch: false
};
