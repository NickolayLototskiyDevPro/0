/* participantObject EXAMPLE */
/* Example: { firstName: 'Sergey', lastName: 'Zotenko', seniorityLevel: 'intermediate' } */
//const participantObject = {
//    firstName: string,
//    lastName: string,
//    seniorityLevel: string
//}

/* pricingObject EXAMPLE */
/* Example: { 'junior': 10 } */
//const pricingObject = {
//     roleName: number
// }

const project = {
    participants: [],
    pricing: { },
    isBusy: boolean,

    /* implement initialization of the object */
    /* participants - predefined array of participants */
    /* pricing - predefined object (keyvalue collection) of pricing */
    init(participants, pricing) {
        this.participants = participants;
        this.pricing = pricing;
     },

 

    /* pass found participant into callback, stops on first match */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with found participant as argument or with null if not */
    /* callbackFunction (participant) => {} */
    findParticipant(functor, callbackFunction) { 
        let me = this;
        me.isBusy = true;
        setTimeout(function(){
             let result = this.participants.filter(functor);
             me.isBusy = false;
             if(callbackFunction){
                 callbackFunction(result);
             }
        }, 200);
    },

    /* pass array of found participants into callback */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with array of found participants as argument or empty array if not */
    /* callbackFunction (participantsArray) => {} */
    findParticipants(functor, callbackFunction) { },

    /* push new participant into this.participants array */
    /* callbackFunction - function that will be executed when job will be done */
    /* (err) => {} */
    addParticipant(participantObject, callbackFunction) { },

    /* push new participant into this.participants array */
    /* callback should receive removed participant */
    /* callbackFunction - function that will be executed with object of removed participant or null if participant wasn't found when job will be done */
    removeParticipant(participantObject, callbackFunction) { },

    /* Extends this.pricing with new field or change existing */
    /* callbackFunction - function that will be executed when job will be done, doesn't take any arguments */
    setPricing(participantPriceObject, callbackFunction) { },

    /* calculates salary of all participants in the given period */
    /* periodInDays, has type number, one day is equal 8 working hours */
    calculateSalary(periodInDays) { }
}






// Все методы которые содержат callbackFunction в списке аргументов должны выполнять свою работу в setTimeout и возвращать значение в данный коллбек.

// Все методы которые содержат callbackFunction в списке аргументов должны устанавливать isBusy в значение true когда начинают работу
// и в значение false когда заканчивают работу.

// Если isBusy установлено в true метод не должен выполнять какую либо работу и сразу же вернуть false.

// Объект project должен быть реализован как синглтон.

// !!! Я ожидаю что Вы запушите файл index.js в корень предоставленного репозитория в следующем виде

/* реализация */
module.exports = {
    firstName: 'Irina',
    lastName: 'Korotkova',
    task: ProjectModule
}

//Где ProjectModule это объект с методом getInstance()
