import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../common/constans/path";
import {Login} from "../features/auth/Login";
import {Registration} from "../features/auth/Registration";
import {Recovery} from "../features/auth/Recovery";
import {Profile} from "../common/components/Profile";
import {NewPassword} from "../features/auth/NewPassword";
import {TestSuperComponents} from "../common/components/superComponents/TestSuperComponents";
import Error404 from "./Error404";

export const Pages = () => {
    return (
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.TEST_SUPER_COMPONENTS}/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.RECOVERY} element={<Recovery/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TEST_SUPER_COMPONENTS} element={<TestSuperComponents/>}/>
                {/*<Route path={'/*'} element={<Error404/>}/>*/}
                <Route path={'/404'} element={<Error404/>}/>
                <Route path={'*'} element={<Navigate to={'/404'}/>}/>
            </Routes>
    )
}

