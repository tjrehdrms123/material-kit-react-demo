import produce from "src/utils/produce";

export const initalState = {
    // 회원 정보 리스트
    memberLists: [],
    memberListsLoding: false,
    memberListsDone: false,
    memberListsError: null,
}

// 회원 정보 리스트
export const MEMBER_LISTS_REQUEST = "MEMBER_LISTS_REQUEST";
export const MEMBER_LISTS_SUCCESS = "MEMBER_LISTS_SUCCESS";
export const MEMBER_LISTS_FAILUER = "MEMBER_LISTS_FAILUER";

const reducer = (state = initalState, action) => 
    produce(state, (draft) => {
        switch(action.type){
            // 회원 정보 리스트
            case MEMBER_LISTS_REQUEST:
                draft.memberListsLoding = true;
                draft.memberListsDone = false;
            case MEMBER_LISTS_SUCCESS:
                draft.memberLists = action.data;
                draft.memberListsLoding = false;
                draft.memberListsDown = true;
                draft.memberListsError = false;
            case MEMBER_LISTS_FAILUER:
                draft.memberListsLoding = true;
                draft.memberListsDone = false;
        }
});

export default reducer;