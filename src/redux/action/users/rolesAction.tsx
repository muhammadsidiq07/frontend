import * as ActionType from '../../constant/users/rolesConstant';

export const GetRolesRequest = () => ({
    type: ActionType.GET_ROLES_REQUEST,
});

export const GetRolesSuccess = (payload: any) => ({
    type: ActionType.ADD_ROLES_SUCCESS, payload,
});

export const GetRolesFailed = (payload: any) => ({
    type: ActionType.GET_ROLES_FAILED, payload,
});

export const AddRolesSuccess = (payload: any) => ({
    type: ActionType.ADD_ROLES_SUCCESS, payload,
});

export const AddRolesFailed = (payload: any) => ({
    type: ActionType.ADD_ROLES_FAILED, payload,
});

export const DelRolesRequest = (payload: any) => ({
    type: ActionType.DEL_ROLES_REQUEST, payload,
});

export const DelRolesSuccess = (payload: any) => ({
    type: ActionType.DEL_ROLES_SUCCESS, payload,
});

export const DelRolesFailed = (payload: any) => ({
    type: ActionType.DEL_ROLES_FAILED, payload,
});

export const EditRolesRequest = (payload: any) => ({
    type: ActionType.EDIT_ROLES_REQUEST, payload,
});

export const EditRolesSuccess = (payload: any) => ({
    type: ActionType.EDIT_ROLES_SUCCESS, payload,
});

export const EditRolesFailed = (payload: any) => ({
    type: ActionType.EDIT_ROLES_FAILED, payload,
});

export const FindRolesRequest = (payload: any) => ({
    type: ActionType.FIND_ROLES_REQUEST, payload,
});

export const FindRolesSuccess = (payload: any) => ({
    type: ActionType.FIND_ROLES_SUCCESS, payload,
});

export const FindRolesFailed = (payload: any) => ({
    type: ActionType.FIND_ROLES_FAILED, payload,
});