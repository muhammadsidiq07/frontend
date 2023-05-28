import React, { useState, useEffect } from 'react';
import Layout from "../../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import EditGeneral from "./general/Edit";

import { GetUsersRequest } from '../../../redux/action/users/usersAction';
import { GetUserPasswordRequest } from '../../../redux/action/users/user-passwordAction';
import { GetUserBonusPointsRequest } from '../../../redux/action/users/user-bonus-pointsAction';
import { GetUserMembersRequest } from '../../../redux/action/users/user-membersAction';
import { GetRolesRequest } from '../../../redux/action/users/rolesAction';
import { GetUserProfilesRequest } from '../../../redux/action/users/user-profilesAction';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import Edit from './user-password/Edit'
import LayoutUser from '../layout';
import { Router, useRouter } from 'next/router';

export default function Index() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState<number>(0);
    const [first, setFirst] = useState(0);
    const [refresh, setRefresh] = useState(false);

    const { UserProfile } = useSelector((state: any) => state.userState );
    const {  userPassword } = useSelector((state: any) => state. userPasswordState);

    useEffect(() => {
        // console.log(UserProfile?.userBonusPoints);
        dispatch(GetUsersRequest());
        dispatch(GetUserPasswordRequest());
        dispatch(GetUserBonusPointsRequest());
        dispatch(GetUserMembersRequest());
        dispatch(GetRolesRequest());
        dispatch(GetUserProfilesRequest());
        setRefresh(false);
        setLoading(true);
    }, [refresh, dispatch]);

    // const kebabGeneral = (rowData: any) => {
    //     return (
    //         <div>
    //             <EditGeneral
    //             id={rowData.userId}
    //             setRefresh={setRefresh}/>
    //         </div>
    //     )
    // }
    // const EditGeneral = () => {
    //     router.push('/users/profile/general/')
    //  }
    // console.log(UserProfile?.userBonusPoints);
    

    // const kebabUserPassword = (rowData: any) => {
    //     return (
    //         <div>
    //             <Edit
    //             id={rowData.uspaUserId}
    //             setRefresh={setRefresh}/>
    //         </div>
    //     )
    // }
    
    return (
        <div>
        <Layout>
            <LayoutUser>
            {!loading ? (
            <h1>loading</h1>
          ) : (
        <div>
        <div className="m-6 min-h-screen">
            <div className="text-left my-4 font-bold text-3xl">General</div>
            <div className="mb-2 block"> Username: {UserProfile?.userFullName}</div>
            <div className="mb-2 block"> Type: {UserProfile?.userType}</div>
            <div className="mb-2 block"> Email: {UserProfile?.userEmail}</div>
            <div className="mb-2 block"> Hand Phone: {UserProfile?.userPhoneNumber}</div>
        <div className="col-md-12 bg-light text-right">
    <div>
<EditGeneral id={UserProfile?.userMembers.usmeUserId} 
setRefresh={setRefresh}/>
</div>
</div>
            {/* <p> HandPhone{UserProfile.userBonusPoints.ubpoCreatedOn}</p> */}
                    {/* <Column
                    field="userId"
                    header={<EditGeneral setRefresh={setRefresh} />}
                    body={kebabGeneral}
                    ></Column> */}
<h2 className="text-left my-4 font-bold text-3xl">Security</h2>
<div className="mb-2 block"> Change Password { userPassword?.uspaPasswordhash}</div>
<div className="col-md-12 bg-light text-right">
    <div>
    <Edit id={UserProfile?.userMembers.usmeUserId} 
setRefresh={setRefresh}/>
</div>
</div>
            
            
            
                {/* <Column
                  field="uspaUserId"
                  header={<Edit setRefresh={setRefresh} />}
                  body={kebabUserPassword}
                ></Column> */}
            
            <h2 className="text-left my-4 font-bold text-3xl">Bonus Points</h2>
            {/* <div className="mb-2 block"> Promo Date: {UserProfile?.userBonusPoints.ubpoCreatedOn}</div>
            <div className="mb-2 block"> Point: {UserProfile?.userBonusPoints.ubpoBonusType}</div>
            <div className="mb-2 block"> Status: {UserProfile?.userBonusPoints.ubpoTotalPoints}</div> */}
            <DataTable 
            value={UserProfile?.userBonusPoints}
            stripedRows 
            tableStyle={{ minWidth: '50rem' }} 
            className='bg-white text-black' 
            paginator
            rows={5}
            first={first}
            >
                <Column field="ubpoCreatedOn" header="Created On"></Column>
                <Column field="ubpoBonusType" header="Bonus Type"></Column>
                <Column field="ubpoTotalPoints" header="Point"></Column>
            </DataTable>
            
            <h2 className="text-left my-4 font-bold text-3xl">History Member</h2>
            <h1> Promo Date: {UserProfile?.userMembers.usmePromoteDate}</h1>
            <h1> Point: {UserProfile?.userMembers.usmePoints}</h1>
            <h1> Status: {UserProfile?.userMembers.usmeType}</h1>
            {/* <DataTable 
            value={UserProfile?.userMembers} 
            stripedRows 
            tableStyle={{ minWidth: '50rem' }} 
            className='bg-white text-black' 
            paginator
            rows={5}
            first={first}>
                <Column field="usmePromoteDate" header="Promo Date"> </Column>
                <Column field="#" header="Member Type"></Column>
                <Column field="usmePoints" header="Point"></Column>
                <Column field="usmeType" header="Status"></Column>
            </DataTable> */}
        </div>
    </div>
)}
</LayoutUser>
    </Layout>
        </div>
    );
}
        