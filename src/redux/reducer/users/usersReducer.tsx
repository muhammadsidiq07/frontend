import * as ActionType from '../../constant/users/usersConstant';

const INIT_STATE = {
    users: [],
    user: [],

};

const UsersReducer = (state = INIT_STATE, action: any) => {
    switch (action.type) {
        case ActionType.GET_USERS_REQUEST:
            return { ...state };
        case ActionType.GET_USERS_SUCCESS:
            return GetUsersSuccessfully(state, action);
        case ActionType.ADD_USERS_REQUEST:
            return { ...state };
        case ActionType.ADD_USERS_SUCCESS:
            return AddUsersSuccessfully(state, action);
        case ActionType.EDIT_USERS_REQUEST:
            return { ...state };
        case ActionType.EDIT_USERS_SUCCESS:
            return EditUsersSuccessfully(state, action);
        case ActionType.DEL_USERS_REQUEST:
            return { ...state };
        case ActionType.DEL_USERS_SUCCESS:
            return DelUsersSuccessfully(state, action);
        case ActionType.FIND_USERS_REQUEST:
            return { ...state };
        case ActionType.FIND_USERS_SUCCESS:
            return FindUsersSuccessfully(state, action);
        default:
            return { ...state };
    }
};

const GetUsersSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        users: payload,
    };
};

const AddUsersSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        users: [...state.users, payload],
    };
};

const DelUsersSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};

const FindUsersSuccessfully = (state: any, action: any) => {
    const { payload } = action;
    return {
        ...state,
        user: payload,
    };
};

const EditUsersSuccessfully = (state: any, action: any) => {
    return {
        ...state,
    };
};
export default UsersReducer;
