const defaultState = {
    notifications: []
}

const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"
const REMOVE_NOTIFICATIONS_IN_CONTAINER = "REMOVE_NOTIFICATIONS_IN_CONTAINER"
const REMOVE_ALL_NOTIFICATIONS = "REMOVE_ALL_NOTIFICATIONS"
const ADD_NOTIFICATION = "ADD_NOTIFICATION"

let id = 0

export const notificationReducer = (state = defaultState,
                                    action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {...state, notifications: [...state.notifications, action.payload]}
        case REMOVE_NOTIFICATION:
            return {...state, notifications: state.notifications.filter(notification => notification.id !== action.payload)}
        case REMOVE_NOTIFICATIONS_IN_CONTAINER:
            return {...state, notifications: state.notifications.filter(notification => notification.link !== action.payload)}
        case REMOVE_ALL_NOTIFICATIONS:
            return {...state, notifications: []}
        default:
            return state
    }
}

export const addNotificationAction = (payload) => {
    id++
    payload = {...payload, id: id}
    return {
        type: ADD_NOTIFICATION,
        payload
    }
}

export const removeNotificationAction = (payload) => {
    return {
        type: REMOVE_NOTIFICATION,
        payload
    }
}

export const removeNotificationsInContainerAction = (payload) => {
    return {
        type: REMOVE_NOTIFICATIONS_IN_CONTAINER,
        payload
    }
}

export const removeAllNotificationsAction = () => {
    return {
        type: REMOVE_ALL_NOTIFICATIONS,
    }
}
