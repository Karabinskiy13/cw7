// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// function cars(model,manufactory, year, maxspeed,volume) {
//     this.model = model
//     this.manufactory = manufactory
//     this.year = year
//     this.maxspeed = maxspeed
//     this.volume = volume
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed}`)
//     }
//     this.info = function () {
//         console.log(`model - ${this.model}`, `manufactory - ${this.manufactory}`, `year - ${this.year}`)
//     }
//
//     this.increasmaxspeed = function (newspeed) {
//         this.maxspeed += newspeed
//     }
//     this.changeyear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// class cars {
//     constructor(model, manufactory, year, maxspeed, volume) {
//         this.model = model;
//         this.manufactory = manufactory;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//         drive =  () {
//             console.log(`їдемо зі швидкістю ${maxspeed}`)
//         }
//         info =  () {
//             console.log(`model - ${this.model}`, `manufactory - ${this.manufactory}`, `year - ${this.year}`)
//         }
//
//         increasmaxspeed = (newspeed) {
//             this.maxspeed += newspeed
//         }
//        changeyear =(newValue) {
//             this.year = newValue
//         }
//         addDriver =(driver) {
//             this.driver = driver
//         }
//     }
//
//     }

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//

// class cinderella{
//     constructor(name, age, footsize) {
//         this.name = name;
//         this.age = age;
//         this.footsize = footsize;
//     }
// }
// let arrayofcinderela=[
//     new cinderella('ivan',10,25),
//     new cinderella('gvan',11,22),
//     new cinderella('dvan',12,25),
//     new cinderella('hvan',13,26),
//     new cinderella('jvan',14,27),
//     new cinderella('kvan',15,28)
// ]
// class prince{
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
//
// }
// let newprince= new prince('prince',10,26)
//
// let newcinderella=arrayofcinderela.find(value => value.footsize===newprince.shoe)
// console.log(newcinderella)