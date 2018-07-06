import axios from "axios";

const initialState = {
  memorials: [],
  isLoading: false,
  didError: false
};

const GRAB_MEMORIALS = "GRAB_MEMORIALS";

export function grabMemorials() {
  return {
    type: GRAB_MEMORIALS,
    payload: axios
      .get(`https://dev.requiemapp.com/public/memorial/random`)
      .then(response => response.data)
      .catch(console.log)
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GRAB_MEMORIALS}_PENDING`:
      return Object.assign({}, state, { isLoading: true });

    case `${GRAB_MEMORIALS}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        memorials: action.payload
      });

    case `${GRAB_MEMORIALS}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    default:
      return state;
  }
}
