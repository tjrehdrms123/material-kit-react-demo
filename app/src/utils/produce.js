import { enableES5, produce } from 'immer';// enableES5 = IE μ§μ μΈν

export default (...args) => {
    enableES5();
    return produce(...args);
}