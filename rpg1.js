class Traveler {
    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
   }
    hunt() {
       this.food += 2;
   }
    eat() { 
       this.food === 0 ? this.isHealthy = false : this.food -= 1;
   }
}   

class Wagon {
    constructor(capacity){
        this.capacity = capacity;
        this.passengers = [];
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length; // num de assentos vazios
    }
    join(passageiro) {
        this.getAvailableSeatCount() > 0 ? this.passengers.push(passageiro) : null;
    }
    shouldQuarantine(){
        //return this.passengers.map(x => x.food === 0 ? this.isHealthy : !this.isHealthy)
        return this.passengers.some(x => x.isHealthy === false); 
    }
    totalFood(){
        return this.passengers.reduce((acc, num) => acc += num.food, 0);
    }
}




