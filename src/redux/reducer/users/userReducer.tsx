import * as UserType from '../../constant/users/userConstant';
import { getCookie } from 'cookies-next';

const getFromCookies = (key: any) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return getCookie(key)
}

const INIT_STATE = {
    UserProfile: getFromCookies('profile') ? JSON.parse(getCookie('profile')) : null,
    UserSignup: null,
    message: ''
}

const UserReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case UserType.GET_SIGNIN_REQUEST:
            return state
        case UserType.GET_SIGNIN_SUCCESS:
            return GetSigninSuccess(state, action)
        case UserType.ADD_SIGNUP_REQUEST:
            return state
        case UserType.ADD_SIGNUP_SUCCESS:
            return AddSignupSuccess(state, action)
        case UserType.POST_SIGNOUT_REQUEST:
            return state
        case UserType.POST_SIGNOUT_SUCCESS:
            return PushSignoutSuccess(state, action)
        case UserType.MESSAGE_NOTIFICATION:
            return ShowMessage(state, action)
        default:
            return state
    }
}

const GetSigninSuccess = (state: any, action: any) => {
    return {
        ...state,
        UserProfile: action.payload,
        message: ''
    }
}

const PushSignoutSuccess = (state: any, action: any) => {
    return {
        ...state,
        UserProfile: null,
        message: "",
    }
}

const AddSignupSuccess = (state: any, action: any) => {

    return {
        ...state,
        UserSignup: action.payload,
    }
}

const ShowMessage = (state: any, action: any) => {
    const { payload } = action
    return {
        ...state,
        message: payload.message
    }
}

export default UserReducer