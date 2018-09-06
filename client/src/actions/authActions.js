import axios from 'axios';

//import setAuthToken from './setAuthToken';
//import jwt_decode from 'jwt-decode';

//import { GET_ERRORS, SET_CURRENT_USER} from './types';

//register user
export const registerUser = (userData, history) => dispatch => {

    axios.post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err =>
    dispatch({
       // type: GET_ERRORS,
        payload: err.response.data
    })
);
};
