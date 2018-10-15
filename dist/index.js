"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PostReducers;

var _actionTypes = require("actions/actionTypes");

var PostInitialState = {
  postList: []
};

var dispatchConsoleLog = function dispatchConsoleLog(msg) {
  return console.log(msg);
};

dispatchConsoleLog("Fire!");

function PostReducers() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PostInitialState;
  var action = arguments[1];


  switch (action.type) {

    case _actionTypes.POST_LIST_FETCH_SUCCESS:
      return Object.assign({}, state, {
        postList: action.postList
      });

    default:
      return state;
  }
}
//# sourceMappingURL=index.js.map