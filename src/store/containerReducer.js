const defaultState = {
    containers: []
}

const ADD_CONTAINER = "ADD_CONTAINER"
const REMOVE_CONTAINER = "REMOVE_CONTAINER"
const ADD_ITEM = "ADD_ITEM"

let index = 0

export const containerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CONTAINER:
            return {...state, containers: [...state.containers, action.payload]}
        case REMOVE_CONTAINER:
            return {...state, containers: state.containers.filter(container => container.id !== action.payload)}
        case ADD_ITEM:
            return {
                ...state, containers: state.containers.map((item) => {
                    if (item.id === action.payload.containerId) {
                        return {...item, data: [...item.data, action.payload]}
                    } else return item
                })
            }
        default:
            return state
    }
}

export const addContainerAction = (payload) => {
    index++
    payload = {...payload, id: index}
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
    console.log(1)
    return {
        type: ADD_ITEM,
        payload
    }
}