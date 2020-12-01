interface ILocalStorage {
    set: (key: string, value: string)=>void
    get: (key: string)=>string|null
    clear: ()=>void
}

export class LocalStorage implements ILocalStorage{

    set (key: string, value: string) {
        localStorage.setItem(key, value)
    }

    get (key: string): string|null {
        return localStorage.getItem(key)
    }

    clear () {
        localStorage.clear()
    }
}