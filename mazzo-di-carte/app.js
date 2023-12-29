class Mazzo {
    constructor (){
        this.carte =[1,2,3,4,5,6,7,"donna", "cavallo", "re"]
        console.log(this.carte);
    }
    michia(){
        this.carte.sort((a,b)=>0.5-Math.random())
        console.log("carte mischiate",this.carte);
    }
    scarta(){
        const carta = this.carte.shift()
            return carta
    }
    mettiInFondo(carta){
        this.carte.push(carta)
        console.log(this.carte);
    }

}
const mazzo = new Mazzo()
mazzo.michia()
const scarto = mazzo.scarta()
console.log(scarto);
mazzo.mettiInFondo(scarto)