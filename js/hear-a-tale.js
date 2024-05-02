window.onload = function() {
    let tale = GetTale();
    DisplayTale(tale);
    AddTale(tale);
};

function DisplayTale(tale){
    // GENERATING NAME
    const nameElement = document.getElementById("name");    
    nameElement.innerHTML = tale.name;

    // GENERATING DESCRIPTION
    const descElement = document.getElementById("description");
    descElement.innerHTML = tale.description;

    // GENERATING HABITAT
    const habElement = document.getElementById("habitat");
    habElement.innerHTML = tale.habitat;

    // GENERATING BEHAVIOR
    const behaviorElement = document.getElementById("behavior");
    behaviorElement.innerHTML = tale.behavior;

    // GENERATING YEAR
    const yearElement = document.getElementById("year");
    if(tale.year == 1){
        yearElement.innerHTML = "Tale told " + tale.year + " time";
    } else yearElement.innerHTML = "Tale told " + tale.year + " times";
}

function GetTale(){
    let tale = GetTaleFromPool();
    if(tale != null){
        tale.UpdateModifiedDate();
        return tale;
    }

    return GenerateTale();
}

function GenerateTale(){
    let nameGrammar = new Grammar("#NAME#");
    let newName = nameGrammar.ExpandGrammar();

    let descGrammar = new Grammar("#DESCRIPTION#");
    let newDesc = descGrammar.ExpandGrammar();

    let habGrammar = new Grammar("#HABITAT#");
    let newHab = habGrammar.ExpandGrammar();

    let behaviorGrammar = new Grammar("#BEHAVIOR#");
    let newBehavior = behaviorGrammar.ExpandGrammar();

    let newYear = GetYear();

    const tale = new Tale(newName, newDesc, newHab, newBehavior, newYear);
    return tale;
}

function GetYear(){
    return 0;
}