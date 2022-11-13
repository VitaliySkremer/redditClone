import {Actions} from "../Actions";

export interface IPostData {
  data:{
    author: string;
    sr_detail:{
      community_icon:string
      banner_img:string
    }
    title: string;
    ups: number;
    created: number;
    num_comments: number;
    id: string;
    subreddit_name_prefixed:string;
    selftext: string;
  }
}

export type RequestPosts = {
  type: typeof Actions.POSTS_REQUEST
}

export type RequestSuccessPosts = {
  type: typeof Actions.POSTS_REQUEST_SUCCESS
  data: IPostData[]
}

export type RequestErrorPosts = {
  type: typeof Actions.POSTS_REQUEST_ERROR
  error: string
}

export type nextAfter = {
  type: typeof Actions.NEXT_AFTER
  nextAfter: string
}

export type countLoad = {
  type: typeof Actions.COUNT_LOAD
  countLoad: number
}

export type firstLoaded = {
  type: typeof Actions.FIRST_LOAD
  firstLoaded: boolean
}

export type emptyFetch = {
  type: typeof Actions.EMPTY_FETCH
  emptyFetch: boolean
}