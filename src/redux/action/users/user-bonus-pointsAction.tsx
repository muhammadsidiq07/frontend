import * as ActionType from '../../constant/users/user-bonus-pointsConstant';

export const GetUserBonusPointsRequest = () => ({
    type: ActionType.GET_USERBONUSPOINTS_REQUEST,
});

export const GetUserBonusPointsSuccess = (payload: any) => ({
    type: ActionType.ADD_USERBONUSPOINTS_SUCCESS, payload,
});

export const GetUserBonusPointsFailed = (payload: any) => ({
    type: ActionType.GET_USERBONUSPOINTS_FAILED, payload,
});

export const AddUserBonusPointsSuccess = (payload: any) => ({
    type: ActionType.ADD_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const AddUserBonusPointsFailed = (payload: any) => ({
    type: ActionType.ADD_USERBONUSPOINTS_FAILED, payload,
});
  
export const DelUserBonusPointsRequest = (payload: any) => ({
    type: ActionType.DEL_USERBONUSPOINTS_REQUEST, payload,
});
  
export const DelUserBonusPointsSuccess = (payload: any) => ({
    type: ActionType.DEL_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const DelUserBonusPointsFailed = (payload: any) => ({
    type: ActionType.DEL_USERBONUSPOINTS_FAILED, payload,
});
  
export const EditUserBonusPointsRequest = (payload: any) => ({
    type: ActionType.EDIT_USERBONUSPOINTS_REQUEST, payload,
});
  
export const EditUserBonusPointsSuccess = (payload: any) => ({
    type: ActionType.EDIT_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const EditUserBonusPointsFailed = (payload: any) => ({
    type: ActionType.EDIT_USERBONUSPOINTS_FAILED, payload,
});
  
export const FindUserBonusPointsRequest = (payload: any) => ({
    type: ActionType.FIND_USERBONUSPOINTS_REQUEST, payload,
});
  
export const FindUserBonusPointsSuccess = (payload: any) => ({
    type: ActionType.FIND_USERBONUSPOINTS_SUCCESS, payload,
});
  
export const FindUserBonusPointsFailed = (payload: any) => ({
    type: ActionType.FIND_USERBONUSPOINTS_FAILED, payload,
});