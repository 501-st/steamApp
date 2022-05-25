const defaultState = {
    containers: []
}

const ADD_CONTAINER = "ADD_CONTAINER"
const REMOVE_CONTAINER = "REMOVE_CONTAINER"

const ADD_ITEM = "ADD_ITEM"
const DELETE_ITEM = "DELETE_ITEM"

let indexOfContainer = 0
let indexOfItem = 0

export const containerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CONTAINER:
            return {...state, containers: [...state.containers, action.payload]}
        case REMOVE_CONTAINER:
            return {...state, containers: state.containers.filter(container => container.id !== action.payload)}
        case ADD_ITEM:
            return {
                ...state, containers: state.containers.map((container) => {
                    if (container.id === action.payload.containerId) {
                        return {...container, data: [...container.data, action.payload]}
                    } else return container
                })
            }
        case DELETE_ITEM:
            return {
                ...state, containers: state.containers.map((container) => {
                    if (container.id === action.payload.containerId) {
                        return {...container, data: container.data.filter(item => item.id !== action.payload.itemId)}
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

export const addItem = (payload) => {
    indexOfItem++
    payload = {...payload, id: indexOfItem}
    return {
        type: ADD_ITEM,
        payload
    }
}

export const deleteItem = (payload) => {
    console.log(payload)
    return {
        type: DELETE_ITEM,
        payload
    }
}