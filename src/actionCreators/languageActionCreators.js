import * as types from './types';

export function switchToRussian(){
  return {
    type: types.RUSSIAN,
    payload: 'russian'
  };
}
export function switchToEnglish(){
  return {
    type: types.ENGLISH,
    payload: 'english'
  };
}
export function switchToChinese(){
  return {
    type: types.CHINESE,
    payload: 'chinese'
  };
}
