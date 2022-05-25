const defaultState = {
    notifications: [{
        id: 1,
        name: "Negev | dev_texture",
    },{
        id: 2,
        name: "AWP | Gungnir",
    },{
        id: 3,
        name: "AK-47 | Сланец",
    },{
        id: 4,
        name: "SSG 08 | Кровь в воде",
    },{
        id: 5,
        name: "AK-47 | Легион Анубиса",
    },{
        id: 6,
        name: "AK-47 | Азимов",
    },]
}

const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
const REMOVE_ALL_NOTIFICATIONS = "REMOVE_ALL_NOTIFICATIONS"

export const notificationReducer = (state = defaultState,
                                    action) => {
    switch (action.type) {
        case REMOVE_NOTIFICATION:
            return {...state, notifications: state.notifications.filter(notification => notification.id !== action.payload)}
        case REMOVE_ALL_NOTIFICATIONS:
            return {...state, notifications: []}
        default:
            return state
    }
}

export const removeNotificationAction = (payload) => {
    return {
        type: REMOVE_NOTIFICATION,
        payload
    }
}

export const removeAllNotificationsAction = () => {
    return {
        type: REMOVE_ALL_NOTIFICATIONS,
    }
}
