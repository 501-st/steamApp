import React from 'react';
import {Outlet, Route, Routes} from "react-router";
import "../index.css"
import Containers from "../pages/containers";
import SingleContainer from "../pages/single-container";
import Account from "../pages/account";
import Notifications from "../pages/notifications";
import NotFound from "../pages/not-found";
import Login from "../pages/login";
import Register from "../pages/register";
import {useSelector} from "react-redux";

const RoutesComponent = () => {

    const containers = useSelector(state => state.containers.containers)

    return (
        <Routes>
            <Route path="/" element={<Containers containers={containers}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            <Route path="/container" element={<Outlet/>}>
                {containers.map((item, index) => (
                    <Route key={index} path=":id" element={<SingleContainer/>}/>
                ))}
            </Route>
            {/*{containers.map((item, index) => (
                <Route key={index} path={`/single-container/` + item.id} element={<SingleContainer name={item.name} data={item.data}/>}/>
            ))}*/}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default RoutesComponent;
