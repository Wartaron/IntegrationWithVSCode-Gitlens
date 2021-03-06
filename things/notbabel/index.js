import {
  POST_LIST_FETCH_SUCCESS,
} from 'actions/actionTypes';

const PostInitialState = {
  postList: []
};

const dispatchConsoleLog = (msg) => console.log(msg);

dispatchConsoleLog("Fire!");

export default function PostReducers(state = PostInitialState, action) {

  switch (action.type) {

    case POST_LIST_FETCH_SUCCESS:
      return Object.assign({}, state, {
        postList: action.postList,
      });

    default:
      return state;
  }
}
