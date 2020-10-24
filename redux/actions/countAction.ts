import {SET_COUNT} from "../types";

import {ICountReducerAction} from "../reducers/countReducer";

export function setCount(count: number) {
    return (dispatch: (dispatchObj: ICountReducerAction)=>ICountReducerAction) => {

        const dispatchObj: ICountReducerAction = {
            type: SET_COUNT,
            payload: {
                count: count
            }
        }

        dispatch(dispatchObj)
    }
}