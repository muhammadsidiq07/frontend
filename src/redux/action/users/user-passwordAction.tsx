import * as ActionType from '../../constant/users/user-passwordConstant';

export const GetUserPasswordRequest = () => ({
    type: ActionType.GET_USERPASSWORD_REQUEST,
});

export const GetUserPasswordSuccess = (payload: any) => ({
    type: ActionType.ADD_USERPASSWORD_SUCCESS, payload,
});

export const GetUserPasswordFailed = (payload: any) => ({
    type: ActionType.GET_USERPASSWORD_FAILED, payload,
});

export const AddUserPasswordSuccess = (payload: any) => ({
    type: ActionType.ADD_USERPASSWORD_SUCCESS, payload,
});
  
export const AddUserPasswordFailed = (payload: any) => ({
    type: ActionType.ADD_USERPASSWORD_FAILED, payload,
});
  
export const DelUserPasswordRequest = (payload: any) => ({
    type: ActionType.DEL_USERPASSWORD_REQUEST, payload,
});
  
export const DelUserPasswordSuccess = (payload: any) => ({
    type: ActionType.DEL_USERPASSWORD_SUCCESS, payload,
});
  
  export const DelUserPasswordFailed = (payload: any) => ({
    type: ActionType.DEL_USERPASSWORD_FAILED, payload,
  });
  
  export const EditUserPasswordRequest = (payload: any) => ({
    type: ActionType.EDIT_USERPASSWORD_REQUEST, payload,
  });
  
  export const EditUserPasswordSuccess = (payload: any) => ({
    type: ActionType.EDIT_USERPASSWORD_SUCCESS, payload,
  });
  
  export const EditUserPasswordFailed = (payload: any) => ({
    type: ActionType.EDIT_USERPASSWORD_FAILED, payload,
  });
  
  export const FindUserPasswordRequest = (payload: any) => ({
    type: ActionType.FIND_USERPASSWORD_REQUEST, payload,
  });
  
  export const FindUserPasswordSuccess = (payload: any) => ({
    type: ActionType.FIND_USERPASSWORD_SUCCESS, payload,
  });
  
  export const FindUserPasswordFailed = (payload: any) => ({
    type: ActionType.FIND_USERPASSWORD_FAILED, payload,
  });