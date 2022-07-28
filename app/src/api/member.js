import { member } from './index';

function memberAPI(query){
    return member.get(`/list${query}`);
}

export {
    memberAPI // 회원 정보 리스트
};