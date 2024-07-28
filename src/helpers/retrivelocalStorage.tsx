const retrivelocalStorage =<T,> (key:string) => {
    const pairJSON = localStorage.getItem(key) || '';

    if(!pairJSON){
        return {} as T;
    }
    let tokenRefresh = JSON.parse(pairJSON);
    return tokenRefresh as T;
}

export {retrivelocalStorage}