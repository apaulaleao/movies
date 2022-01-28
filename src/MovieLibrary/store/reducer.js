import {FETCH_MOVIES} from '../../actionTypes'

const initialState = {
  movies: []
}

export default function movies(state = initialState, action) {
  const {type, payload} = action
  switch (type) {

    case FETCH_MOVIES:
      console.log(FETCH_MOVIES)
      return {
        
        ...state,
        movies: payload
      }
      console.log(FETCH_MOVIES)
    default:
      return state
  }
}
