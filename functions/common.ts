import {ICities} from "../config/variables";

export function findIndexByCompare(array: Array<ICities>, comparing: (compareElem: any) => any): number | null{
    for (let i = 0; i < array.length; i++) {
        if (comparing(array[i])) return i
    }
    return null
}