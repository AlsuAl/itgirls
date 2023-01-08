class Worker {
    constructor(options) {
      this.name= options.name; 
      this.surname = options.surname;
      this.rate = options.rate;
      this.days = options.days; 
    }
    getSalary() {
        this.salary=this.rate*this.days;
        return this.salary
    }
  }

let worker = new Worker({
    name:'Иван',
    surname:'Иванов',
    rate: 10, 
    days: 31,
});

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31