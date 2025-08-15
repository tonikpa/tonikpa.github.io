function GetMemories(){
    let data = localStorage.getItem("memories");
    if(data == null) data = '{"memories":[]}';

    return JSON.parse(data);
}

function StoreMemories(_data){
    const data = JSON.stringify(_data);
    localStorage.setItem("memories", data);
}

function AddMemory(memory){
    let data = GetMemories();
    data.memories.push(memory);
    StoreMemories(data);
}