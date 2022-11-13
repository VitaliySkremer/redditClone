import {useSelector} from "react-redux";
import {RootState} from "../Store/InitialState";
import {IPostData} from "../Store/posts/typePosts";
import {useParams} from "react-router-dom";

export function useGetPost(){
  const listPosts = useSelector<RootState,IPostData[]>(state=> state.posts.data)
  const {id} = useParams();
  const post = listPosts.find(item=> item.data.id === id)
  return [post];
}