import { setAuthInHeader } from '../api'

const mutations = {
  LOGIN (state, {accessToken}) {
    if (!accessToken) return
    state.accessToken = accessToken
    localStorage.accessToken = accessToken
    setAuthInHeader(accessToken)
  },
  LOGOUT (state) {
    state.accessToken = null 
    delete localStorage.accessToken
    setAuthInHeader(null)
  },
  SET_BOARD_LIST (state, {list}) {
    state.boardList = list
  },
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle
  }
}

export default mutations 