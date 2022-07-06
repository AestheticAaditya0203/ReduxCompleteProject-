import { USERS_LIST } from '../actions/userActions'

const initialState = {
    loading: true,
    usersList: [],
    error: '',
    testing: 'heello world'
}

const userReducers = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case USERS_LIST:
            return {
                ...state,
                loading: false,
                usersList: action.payload
            }

        default: return state;
    }
}

export default userReducers;