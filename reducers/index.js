import { HYDRATE } from "next-redux-wrapper"; // 리덕스 서버사이드 렌더링 관련
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payolad };
      default:
        return state;
    }
  }, // 하이드레이트 사용하기 위해 index reducer 추가
  user,
  post,
});

export default rootReducer;
