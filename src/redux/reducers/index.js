const initialState = {
  data:[],
  user: {},
  loading: true,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_LOADED':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: false
      };

    case 'DATA_REQUESTED':
      return {
        ...state,
        loading: true,
        user: {}
      };

    case 'HIDE_LOADING':
      return {
        ...state,
        loading: false
      };

    case 'DATA_ERROR':
      return {
        ...state,
        error: true
      };

    case 'SORT_USERS':
      const newArr = action.payload.sort((a, b) => a.name > b.name ? 1 : -1);
      return {
        ...state,
        data: [
          ...newArr
        ]
      };

    case 'DELETE_USER':
      const idx = action.payload;
      const userIndex = state.data.findIndex(item => item.id === idx);
      return {
        ...state, 
        data: [
          ...state.data.slice(0, userIndex),
          ...state.data.slice(userIndex + 1)
        ]
      }

    case 'DELETE_ALL_USERS':
      return {
        ...state, 
        data: []
      }

    default:
      return state;
  }
}

export default reducer;