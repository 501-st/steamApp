const defaultState = {
    containers: []
}

const ADD_CONTAINER = "ADD_CONTAINER"
const REMOVE_CONTAINER = "REMOVE_CONTAINER"

const ADD_ITEM = "ADD_ITEM"
const ADD_BENEFIT = "ADD_BENEFIT"
const DELETE_ITEM = "DELETE_ITEM"
const CONTAINER_STATUS_CHECKED = "CONTAINER_STATUS_CHECKED"

export let indexOfContainer = 0
export let indexOfItem = 0

export const containerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CONTAINER:
            return {...state, containers: [...state.containers, action.payload]}
        case REMOVE_CONTAINER:
            return {...state, containers: state.containers.filter(container => container.id !== action.payload)}
        case CONTAINER_STATUS_CHECKED:
            return {
                ...state, containers: state.containers.map((container) => {
                    if (container.id === action.payload.containerId) {
                        return {...container, checked: true}
                    } else return container
                })
            }
        case ADD_ITEM:
            return {
                ...state, containers: state.containers.map((container) => {
                    if (container.id === action.payload.containerId) {
                        return {...container, checked: false, data: [...container.data, action.payload]}
                    } else return container
                })
            }
        case ADD_BENEFIT:
            return {
                ...state, containers: state.containers.map((container) => {
                    if (container.id === action.payload.containerId) {
                        return {...container, benefit: action.payload.benefit}
                    } else return container
                })
            }
        case DELETE_ITEM:
            return {
                ...state, containers: state.containers.map((container) => {
                    if (container.id === action.payload.containerId) {
                        return {
                            ...container,
                            checked: false,
                            data: container.data.filter(item => item.id !== action.payload.itemId)
                        }
                    } else return container
                })
            }
        default:
            return state
    }
}

export const addContainerAction = (payload) => {
    indexOfContainer++
    payload = {...payload, id: indexOfContainer}
    return {
        type: ADD_CONTAINER,
        payload
    }
}

export const removeContainerAction = (payload) => {
    return {
        type: REMOVE_CONTAINER,
        payload
    }
}

export const containerCheckedAction = (payload) => {
    return {
        type: CONTAINER_STATUS_CHECKED,
        payload
    }
}

export const addBenefitToContainerAction = (payload) => {
    return {
        type: ADD_BENEFIT,
        payload
    }
}

export const addItem = (payload) => {
    indexOfItem++
    payload = {...payload, id: indexOfItem}
    return {
        type: ADD_ITEM,
        payload
    }
}

export const deleteItem = (payload) => {
    return {
        type: DELETE_ITEM,
        payload
    }
}