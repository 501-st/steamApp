import React from 'react';
import {Route, Routes} from "react-router";
import "../index.css"
import Bags from "../pages/bags";
import Bag from "../pages/bag";
import Account from "../pages/account";
import Notifications from "../pages/notifications";
import NotFound from "../pages/not-found";
import Gun from "../components/page-components/bag/images/gun.png"
import Login from "../pages/login";
import Register from "../pages/register";

const Data = [{
    name: "Negev",
    used: 2,
    place: 5,
    benefit: 5345.4,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Рандомное название",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -243,
        current_price: 0.4,
        percent_benefit: -4657
    }, {
        image: Gun,
        name: "Ооооооочень длинное название",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}, {
    name: "M4",
    used: 3,
    place: 5,
    benefit: -32,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 222,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Рандомное название",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -24,
        current_price: 0.4,
        percent_benefit: -57
    }, {
        image: Gun,
        name: "Ооооооочень длинное название",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Рандомное название",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -243,
        current_price: 0.4,
        percent_benefit: -46
    }, {
        image: Gun,
        name: "Ооооооочень длинное название",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}, {
    name: "AWP",
    used: 0,
    place: 5,
    benefit: 22,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Пушка какая-то",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -243,
        current_price: 0.4,
        percent_benefit: -47
    }, {
        image: Gun,
        name: "лалала 3 рубля",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}, {
    name: "test",
    used: 5,
    place: 5,
    benefit: 990,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Dragon Lore",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -243,
        current_price: 0.4,
        percent_benefit: -3
    }, {
        image: Gun,
        name: "Gungnir",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}, {
    name: "MyBag",
    used: 4,
    place: 5,
    benefit: -2344,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Рандомное название",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -2,
        current_price: 0.4,
        percent_benefit: -0.4
    }, {
        image: Gun,
        name: "Asimov",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}, {
    name: "Last",
    used: 2,
    place: 5,
    benefit: 2.4,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Рандомное название",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -243,
        current_price: 0.4,
        percent_benefit: -57
    }, {
        image: Gun,
        name: "Ооооооочень длинное название",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}, {
    name: "LastOne",
    used: 3,
    place: 5,
    benefit: 4,
    data: [{
        image: Gun,
        name: "Negev | dev_texture",
        amount: 10,
        bought_for: 0.25,
        benefit: 2.2,
        current_price: 1.75,
        percent_benefit: 46
    }, {
        image: Gun,
        name: "Рандомное название",
        amount: 1000,
        bought_for: 1213.43,
        benefit: -3,
        current_price: 0.4,
        percent_benefit: -7
    }, {
        image: Gun,
        name: "Ооооооочень длинное название",
        amount: 1,
        bought_for: 0.22354757435,
        benefit: 212123.21314,
        current_price: 112323.71231231235,
        percent_benefit: 441241246
    },]
}]

const RoutesComponent = () => {


    return (
        <Routes>
            <Route path="/" element={<Bags data={Data}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/notifications" element={<Notifications/>}/>
            {Data.map((item, index) => (
                <Route key={index} path={`/bag/` + (index + 1)} element={<Bag data={item.data}/>}/>
            ))}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default RoutesComponent;
