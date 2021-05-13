const dataLoaded = (newData) => {
  return {
    type: 'DATA_LOADED',
    payload: newData
  }
};

const dataRequested = () => {
  return {
    type: 'DATA_REQUESTED'
  }
};

const hideLoading = () => {
  return {
    type: 'HIDE_LOADING'
  }
}

const dataError = () => {
  return {
    type: 'DATA_ERROR'
  }
};

const sortUsers = (data) => {
  return {
    type: 'SORT_USERS',
    payload: data
  }
}

const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    payload: id
  }
}

const deleteAllUsers = () => {
  return {
    type: 'DELETE_ALL_USERS'
  }
}

export {
  dataLoaded,
  dataRequested,
  hideLoading,
  dataError,
  sortUsers,
  deleteUser,
  deleteAllUsers
}