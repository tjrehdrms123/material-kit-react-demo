import { enableES5, produce } from 'immer';// enableES5 = IE 지원 세팅

export default (...args) => {
    enableES5();
    return produce(...args);
}