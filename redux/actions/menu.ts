import {SHOW_MENU} from "../types";
import {IReducerAction} from "../../interfaces/redux";
import {IMenuReducer} from "../reducers/menu";

export function setShow(show: boolean) {
    return (dispatch: (dispatchObj: IReducerAction<IMenuReducer>) => void) => {

        const dispatchObj = {
            type: SHOW_MENU,
            payload: {
                show: show
            }
        }

        dispatch(dispatchObj)
    }
}