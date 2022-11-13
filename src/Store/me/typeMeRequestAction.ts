import {Actions} from "../Actions";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export type MeRequestAction = {
  type: typeof Actions.ME_REQUEST,
}

export type MeRequestSuccessAction = {
  type: typeof Actions.ME_REQUEST_SUCCESS,
  data: IUserData;
}

export type MeRequestErrorAction = {
  type: typeof Actions.ME_REQUEST_ERROR,
  error: string,
}
