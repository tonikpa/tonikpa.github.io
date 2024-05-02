window.onload = function() {
    DecayFolklore();
    ListFolklore();
};

function ListFolklore(){
    let cookie = GetAllTales();
    var textData = "you have no tales :("
    
    if(cookie.myTales.length > 0){
        textData = "";
        cookie.myTales.forEach((tale, index) => {
            let yearText;
            if(tale.year == 1){
                yearText = "Tale told 1 time"
            } else yearText = "Tale told " + tale.year + " times"; 


            textData += `
            <div class="creature-input-container">
                <div class="creature-name-input">
                    <input type="text" id="${index}_name" value="${tale.name}">
                    <br>
                </div>
                <div class="creature-input-year" id="year">
                    ${yearText}
                </div>
                <div class="creature-input">
                    <input type="text" id="${index}_desc" value="${tale.description}">
                    <br>
                </div>
                <div class="creature-input">
                    <input type="text" id="${index}_habitat" value="${tale.habitat}">
                    <br>
                </div>
                <div class="creature-input">
                    <input type="text" id="${index}_behavior" value="${tale.behavior}">
                    <br><br>
                </div>
                <input class="send-button" type="button" value="tell tale" onclick="SendTale('${tale.id}', '${index}')">
                <br>
                    ===============================================================================
                <br>
            </div>
            `
        });
    }

    const talesElement = document.getElementById("tale-list");
    talesElement.innerHTML = textData;
}

function DecayFolklore(){
    let tales = GetAllTalesAsTaleObject();

    for(let i = 0; i < tales.length; i++){
        tales[i].Decay();
    }

    StoreAllTalesFromTaleObject(tales);
}

function SendTale(_taleId, index){
    let removed = RemoveTale(_taleId);

    removed.name = document.getElementById(index.toString()+"_name").value;;
    removed.description = document.getElementById(index.toString()+"_desc").value;;
    removed.habitat = document.getElementById(index.toString()+"_habitat").value;;
    removed.behavior = document.getElementById(index.toString()+"_behavior").value;;

    removed.AdvanceTime();

    AddTaleToPool(removed);
    location.reload();
}

