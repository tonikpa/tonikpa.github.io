var mems = [];
var currentMem = "";
var rooms = [];
var currentRoom = "";

// ===== ON LOAD =====
window.onload = function(){
    UpdateRoom();
}


// ===== MEMORY STUFF ====
function UpdateMemory(){
    // UPDATING MEMORY
    if(currentMem != ""){
        AddMemoryToList(currentMem);
    }
    currentMem = GetNewMemory();
    document.getElementById("current-memory").innerHTML = currentMem;

    // UPDATING ROOM
    UpdateRoom();
}

function AddMemoryToList(newMemory){
    mems.push(newMemory);

    var str = "<ul>";
    for(let i = mems.length-1; i > -1; i--){
        str += "<li>" + mems[i] + "</li>";
    }
    str += "</ul>";

    document.getElementById("memory-log").innerHTML = str;
}

function GetNewMemory(){
    let repeatChance = Math.min(0.0075 * (mems.length), 0.6);
    console.log(repeatChance);

    if(mems.length < 5 || Math.random() > repeatChance){
        let newMem = new Grammar("#MEM#");
        return newMem.ExpandGrammar();
    } 

    let str = "You read a memory that said '" + mems[Math.floor(Math.random() * mems.length)] + "'";
    return str;
}

// ===== ROOM STUFF ====
function UpdateRoom(){
    if(currentRoom != ""){
        AddRoomToList(currentRoom);
    }

    currentRoom = GetNewRoom().toUpperCase();
    document.getElementById("current-room").innerHTML = currentRoom + " ROOM";
}

function AddRoomToList(newRoom){
    rooms.push(newRoom);

    var str = "<ul>";
    for(let i = rooms.length-1; i > -1; i--){
        str += "<li>" + rooms[i] + "</li>";
    }
    str += "</ul>";

    document.getElementById("room-log").innerHTML = str;
}

function GetNewRoom(){
    let newRoom = new Grammar("#ROOM#");
    
    return newRoom.ExpandGrammar();
}

