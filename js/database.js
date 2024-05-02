function GetAllTales(){
    let cookie = localStorage.getItem("tales");
    if(cookie == null) cookie = '{"myTales":[]}';

    return JSON.parse(cookie);
}

function StoreAllTales(_cookie){
    const cookie = JSON.stringify(_cookie);
    localStorage.setItem("tales", cookie);
}

function AddTale(_tale){
    let cookie = GetAllTales();
    cookie.myTales.push(_tale);
    StoreAllTales(cookie);
}

function RemoveTale(_taleId){
    let cookie = GetAllTales();
    let target = -1;
    let removed = null;

    cookie.myTales.forEach((element, index) => {
        if(element.id == _taleId) target = index;
    });

    if(target!=-1){
        let splc = cookie.myTales.splice(target,1);
        removed = splc[0];
    }

    StoreAllTales(cookie);
    return GenericToTaleObject(removed);
}

// ===== FOR TALE OBJECTS ====

function GetAllTalesAsTaleObject(){
    let cookieObj = GetAllTales();
    let taleObjs = [];
    cookieObj.myTales.forEach(element => {
        taleObjs.push(GenericToTaleObject(element));
    });

    return taleObjs;
}

function StoreAllTalesFromTaleObject(_taleObjs){
    let cookieObj = {myTales:[]};
    _taleObjs.forEach(element => {
        cookieObj.myTales.push(element);
    });

    StoreAllTales(cookieObj);
}

function GenericToTaleObject(_element){
    if(_element == null) return null;

    return new Tale(_element.name, _element.description, _element.habitat, _element.behavior, _element.year, _element.id, _element.lastModifiedDate);
}

// ===== TALE POOL =====

function GetAllPool(){
    let cookie = localStorage.getItem("pool");
    if(cookie == null) cookie = '{"pool":[]}';

    return JSON.parse(cookie);
}

function StorePool(_pool){
    const cookie = JSON.stringify(_pool);
    localStorage.setItem("pool", cookie);
}

function GetTaleFromPool(){
    let cookie = GetAllPool();
    let tale = cookie.pool.shift();

    if(tale == undefined) return null;

    StorePool(cookie);
    return GenericToTaleObject(tale);
}

function AddTaleToPool(_tale){
    let cookie = GetAllPool();
    cookie.pool.push(_tale);
    StorePool(cookie);
}