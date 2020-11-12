export function findIndexByCompare(array: Array<any>, comparing: (compareElem: any) => any): number | null{
    for (let i = 0; i < array.length; i++) {
        if (comparing(array[i])) return i
    }
    return null
}