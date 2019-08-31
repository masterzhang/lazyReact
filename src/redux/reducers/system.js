/**
 * Created by zhy on 2019/1/8 0008.
 */
import {langulageSpecialMap} from '../../config/i18n.config'
const languages = navigator.languages
const currentLang = languages[0]
const initialState = {
  isFetching: true,
  language: langulageSpecialMap[currentLang] || currentLang
};

export const actionsTypes = {
  FETCH_START: "FETCH_START",
  FETCH_END: "FETCH_END",
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_START:
      return {
        ...state, isFetching: true
      }
    case actionsTypes.FETCH_END:
      return {
        ...state, isFetching: false
      }
    case actionsTypes.CHANGE_LANGUAGE:
      return {
        ...state, language: action.language
      }
    default:
      return state
  }
}
export const actions = {
  changeLanguage: function (language) {
    return {
      type: actionsTypes.CHANGE_LANGUAGE,
      language
    }
  },
  startFetch: () => ({type: actionsTypes.FETCH_START}),
  endFetch: () => ({type: actionsTypes.FETCH_END})
};
