import { CHINESE, ENGLISH, RUSSIAN } from '../actions/types';

export default function languageReducer (state = ENGLISH, action){
    switch (action.type){
        case RUSSIAN: return action.payload;
        case CHINESE: return action.payload;
        case ENGLISH: return action.payload;
        default: return state;
    }
}
