class Tale {
    id = 0;
    lastModifiedDate = 0;
       
    name = "";
    description = "";
    habitat = "";
    behavior = "";
    year = 0;

    decayPeriod = 30;

    constructor(_name, _desc, _habitat, _behavior, _year, _id = null, _date = null){
        if(_id == null){
            this.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);  
        } else this.id = _id;

        if(_date == null){
            this.lastModifiedDate = this.GetCurrentTime();
        } else this.lastModifiedDate = _date;

        this.name = _name;
        this.description = _desc;
        this.habitat = _habitat;
        this.behavior = _behavior;
        this.year = _year;
    }

    Decay(){
        let current = this.GetCurrentTime();
        let count = Math.floor((current - this.lastModifiedDate)/this.decayPeriod);

        for(let i = 0; i < count; i++){
            let rand = Math.floor(Math.random() * 4);
            if(rand == 0){
                this.name = this.RemoveRandomLetter(this.name);
            } else if (rand == 1){
                this.description = this.RemoveRandomLetter(this.description);
            } else if (rand == 2){
                this.habitat = this.RemoveRandomLetter(this.habitat);
            } else{
                this.behavior = this.RemoveRandomLetter(this.behavior);
            }
        }

        this.lastModifiedDate = current;
    }

    RemoveRandomLetter(str){
        var pos = Math.floor(Math.random()*str.length);
        
        if(!this.IsLetter(str.charAt(pos))){
            return str;
        }

        let char = "_"
        if(Math.random() > 0.8){
            char = this.GetRandomLetter();
        }

        return str.substring(0, pos)+char+str.substring(pos+1);
    }

    UpdateModifiedDate(){
        this.lastModifiedDate = this.GetCurrentTime();
    }

    AdvanceTime(){
        this.year += 1;
    }

    // ===== UTILS =======

    IsLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
    }

    GetRandomLetter(){
        return String.fromCharCode(97+Math.floor(Math.random() * 26));
    }

    GetCurrentTime(){
        return Math.floor(new Date().getTime() / 1000);
    }
}