import * as UserAction from '../../constant/users/userConstant';

export const doGetSigninRequest = (payload: any) => ({
    type : UserAction.GET_SIGNIN_REQUEST, payload
})

export const doGetSigninSuccess = (payload: any) =>({
    type: UserAction.GET_SIGNIN_SUCCESS, payload
})

export const doAddSignupRequest = (payload: any) => ({
    type: UserAction.ADD_SIGNUP_REQUEST, payload
})

export const doAddSignupSuccess = (payload: any) => ({
    type: UserAction.ADD_SIGNUP_SUCCESS, payload
})

export const doAddSignupFailed = (payload: any) => ({
    type: UserAction.ADD_SIGNUP_FAILED, payload
})

export const doPushSignoutRequest = (payload: any) => ({
    type: UserAction.POST_SIGNOUT_REQUEST, payload
})

export const doPushSignoutSuccess = (payload: any) => ({
    type: UserAction.POST_SIGNOUT_SUCCESS, payload
})

export const doPushSignoutFailed = (payload: any) => ({
    type: UserAction.POST_SIGNOUT_FAILED, payload
})

export const doMessageNotification = (message: any) =>({
    type: UserAction.MESSAGE_NOTIFICATION,
    payload : message
})