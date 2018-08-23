
import { 
  GET_ACCESS_TOKEN,
  SET_DATA,
  GET_CONTENT,
  GET_FAVORITES,
  SET_FAVORITE,
  DEL_FAVORITE,
  GET_CONTENT_STATE,
} from './actionTypes'

export function getAccessToken() {
  return {
    type: GET_ACCESS_TOKEN,
  }
}

export function setData(data) {
  return {
    type: SET_DATA,
    data,
  }
}

export function getContent() {
  return {
    type: GET_CONTENT,
  }
}

export function getContentState(id) {
  return {
    type: GET_CONTENT_STATE,
    id,
  }
}

export function getFavorites() {
  return {
    type: GET_FAVORITES,
  }
}

export function setFavorite(id) {
  return {
    type: SET_FAVORITE,
    id,
  }
}

export function delFavorite(id) {
  return {
    type: DEL_FAVORITE,
    id,
  }
}
