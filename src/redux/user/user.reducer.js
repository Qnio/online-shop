import { UserActionTypes } from './user.types';

//creating iinnitial state for our user
const INITIAL_STATE = {
  currentUser: null
};

// function with two parameters STATE and ACTION
// setting default state as INNITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state, //we allways want to return spreadet state
        currentUser: action.payload // action that we want to update our current user state
      };
    default:
      return state;
  }
};

export default userReducer;
