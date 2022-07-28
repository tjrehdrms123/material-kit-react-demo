import { HYDRATE } from "next-redux-wrapper";

// import adminUser from "./adminUser";
import { combineReducers } from "redux";
import member from "./member";

// combineReducers란 리듀서들을 합쳐주는 역활을 한다.
//HYDRATE 는 리덕스 서버사이드 렌더링을 위해서 넣어준다.
// 서버사이드 렌더링을 위해서 index를 추가해 준것이다. 서버사이드 렌더링이 아니면 없어도 될듯 합니다.
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        member
      });
      return combineReducer(state, action);
    }
  }
};
export default rootReducer;
