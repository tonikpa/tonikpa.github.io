class Grammar {
    currentString = "";

    constructor(initial){
        this.currentString = initial;
    }

    ExpandGrammar(){
        let isExpanding = true;
        while(isExpanding){
            var stringSymbols = this.currentString.split(" ");
            var newState = this.ApplyRules(stringSymbols);
            
            isExpanding = newState.status;
            stringSymbols = newState.strings;


            this.currentString = stringSymbols.join(" ");
        }
        
        return this.currentString;
    }

    ApplyRules(_stringSymbols){
        let isExpanding = false;

        for(let i = 0; i < _stringSymbols.length; i++){
            let rule = this.GetRule(_stringSymbols[i]);

            if(rule != null){
                isExpanding = true;
                let chosenSymbol = rule.after[Math.floor(Math.random() * rule.after.length)];
                _stringSymbols[i] = _stringSymbols[i].replace(rule.before, chosenSymbol);
            }            
        }

        return {status: isExpanding, strings:_stringSymbols};
    }

    GetRule(_element){
        for(let i = 0; i < data.rules.length; i++){
            if(_element.includes(data.rules[i].before)){
                return data.rules[i];
            }
        }

        return null;
    }

}