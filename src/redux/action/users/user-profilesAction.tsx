import * as ActionType from '../../constant/users/user-profilesConstant';

export const GetUserProfilesRequest = () => ({
    type: ActionType.GET_USERPROFILES_REQUEST,
});

export const GetUserProfilesSuccess = (payload: any) => ({
    type: ActionType.ADD_USERPROFILES_SUCCESS, payload,
});

export const GetUserProfilesFailed = (payload: any) => ({
    type: ActionType.GET_USERPROFILES_FAILED, payload,
});

export const AddUserProfilesSuccess = (payload: any) => ({
    type: ActionType.ADD_USERPROFILES_SUCCESS, payload,
  });
  
  export const AddUserProfilesFailed = (payload: any) => ({
    type: ActionType.ADD_USERPROFILES_FAILED, payload,
  });
  
  export const DelUserProfilesRequest = (payload: any) => ({
    type: ActionType.DEL_USERPROFILES_REQUEST, payload,
  });
  
  export const DelUserProfilesSuccess = (payload: any) => ({
    type: ActionType.DEL_USERPROFILES_SUCCESS, payload,
  });
  
  export const DelUserProfilesFailed = (payload: any) => ({
    type: ActionType.DEL_USERPROFILES_FAILED, payload,
  });
  
  export const EditUserProfilesRequest = (payload: any) => ({
    type: ActionType.EDIT_USERPROFILES_REQUEST, payload,
  });
  
  export const EditUserProfilesSuccess = (payload: any) => ({
    type: ActionType.EDIT_USERPROFILES_SUCCESS, payload,
  });
  
  export const EditUserProfilesFailed = (payload: any) => ({
    type: ActionType.EDIT_USERPROFILES_FAILED, payload,
  });
  
  export const FindUserProfilesRequest = (payload: any) => ({
    type: ActionType.FIND_USERPROFILES_REQUEST, payload,
  });
  
  export const FindUserProfilesSuccess = (payload: any) => ({
    type: ActionType.FIND_USERPROFILES_SUCCESS, payload,
  });
  
  export const FindUserProfilesFailed = (payload: any) => ({
    type: ActionType.FIND_USERPROFILES_FAILED, payload,
  });