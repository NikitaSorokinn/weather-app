import {SET_ERROR} from "../types";
import {IReducerAction} from "../../interfaces/redux";
import {IErrorReducer} from "../reducers/error";

export function setError(error: string) {
    return (dispatch: (dispatchObj: IReducerAction<IErrorReducer>) => void) => {

        const dispatchObj = {
            type: SET_ERROR,
            payload: {
                error: error
            }
        }

        dispatch(dispatchObj)
    }
}