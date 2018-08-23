import { SET_DATA } from '../actions/actionTypes'

const initialState = {
  dataFetched: false,
  isFetching: false,
  token: null,
  error: false,
  simpleLists: [],
  favorite: false,
  locked: true,
  userId: null,
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
