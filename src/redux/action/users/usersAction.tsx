import * as ActionType from '../../constant/users/usersConstant';

export const GetUsersRequest = () => ({
    type: ActionType.GET_USERS_REQUEST,
});

export const GetUsersSuccess = (payload: any) => ({
    type: ActionType.ADD_USERS_SUCCESS, payload,
});

export const GetUsersFailed = (payload: any) => ({
    type: ActionType.GET_USERS_FAILED, payload,
});

export const AddUsersRequest = (payload: any) => ({
  type: ActionType.ADD_USERS_REQUEST, payload,
});

export const AddUsersSuccess = (payload: any) => ({
    type: ActionType.ADD_USERS_SUCCESS, payload,
  });
  
  export const AddUsersFailed = (payload: any) => ({
    type: ActionType.ADD_USERS_FAILED, payload,
  });
  
  export const DelUsersRequest = (payload: any) => ({
    type: ActionType.DEL_USERS_REQUEST, payload,
  });
  
  export const DelUsersSuccess = (payload: any) => ({
    type: ActionType.DEL_USERS_SUCCESS, payload,
  });
  
  export const DelUsersFailed = (payload: any) => ({
    type: ActionType.DEL_USERS_FAILED, payload,
  });
  
  export const EditUsersRequest = (payload: any) => ({
    type: ActionType.EDIT_USERS_REQUEST, payload,
  });
  
  export const EditUsersSuccess = (payload: any) => ({
    type: ActionType.EDIT_USERS_SUCCESS, payload,
  });
  
  export const EditUsersFailed = (payload: any) => ({
    type: ActionType.EDIT_USERS_FAILED, payload,
  });
  
  export const FindUsersRequest = (payload: any) => ({
    type: ActionType.FIND_USERS_REQUEST, payload,
  });
  
  export const FindUsersSuccess = (payload: any) => ({
    type: ActionType.FIND_USERS_SUCCESS, payload,
  });
  
  export const FindUsersFailed = (payload: any) => ({
    type: ActionType.FIND_USERS_FAILED, payload,
  });