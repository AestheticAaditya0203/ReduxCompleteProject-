import axios from 'axios'

export const USERS_LIST = 'USERS_LIST'

export const incNumber = () => {
  return {
      type: 'INCREMENT'
  }
}
export const decNumber = () => {
  return {
      type: 'DECREMENT'
  }
}

export const fetchUsers = () => {
  
  return function (dispatch) {
    console.log('this func is called')
    //dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        console.log(response)
        const users = response.data
        console.log(users)
        dispatch({
          type: USERS_LIST,
          payload: users,
        });

      })
      .catch(error => {
         console.log(error);
      })
  }
}
