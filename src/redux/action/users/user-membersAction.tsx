import * as ActionType from '../../constant/users/user-membersConstant';

export const GetUserMembersRequest = () => ({
    type: ActionType.GET_USERMEMBERS_REQUEST,
});

export const GetUserMembersSuccess = (payload: any) => ({
    type: ActionType.ADD_USERMEMBERS_SUCCESS, payload,
});

export const GetUserMembersFailed = (payload: any) => ({
    type: ActionType.GET_USERMEMBERS_FAILED, payload,
});

export const AddUserMembersSuccess = (payload: any) => ({
    type: ActionType.ADD_USERMEMBERS_SUCCESS, payload,
});
  
export const AddUserMembersFailed = (payload: any) => ({
    type: ActionType.ADD_USERMEMBERS_FAILED, payload,
});
  
export const DelUserMembersRequest = (payload: any) => ({
    type: ActionType.DEL_USERMEMBERS_REQUEST, payload,
});
  
export const DelUserMembersSuccess = (payload: any) => ({
    type: ActionType.DEL_USERMEMBERS_SUCCESS, payload,
});
  
export const DelUserMembersFailed = (payload: any) => ({
    type: ActionType.DEL_USERMEMBERS_FAILED, payload,
});
  
export const EditUserMembersRequest = (payload: any) => ({
    type: ActionType.EDIT_USERMEMBERS_REQUEST, payload,
});
  
export const EditUserMembersSuccess = (payload: any) => ({
    type: ActionType.EDIT_USERMEMBERS_SUCCESS, payload,
});
  
export const EditUserMembersFailed = (payload: any) => ({
    type: ActionType.EDIT_USERMEMBERS_FAILED, payload,
});
  
export const FindUserMembersRequest = (payload: any) => ({
    type: ActionType.FIND_USERMEMBERS_REQUEST, payload,
});
  
export const FindUserMembersSuccess = (payload: any) => ({
    type: ActionType.FIND_USERMEMBERS_SUCCESS, payload,
});
  
export const FindUserMembersFailed = (payload: any) => ({
    type: ActionType.FIND_USERMEMBERS_FAILED, payload,
});