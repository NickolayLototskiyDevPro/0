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

let ProjectModule = (function () {
    
    const project = {
        participants: [],
        pricing: {},
        isBusy: false,

    /* implement initialization of the object */
    /* participants - predefined array of participants */
    /* pricing - predefined object (keyvalue collection) of pricing */
    init(participants, pricing) {
        this.isBusy = true;
        {
        if(Array.isArray(participants)){
            if(participants.length == 0 || participants.every((item) => 'seniorityLevel' in item)) {
                this.participants = participants;
            }
        }
        if(typeof pricing == 'object' && pricing != null) this.pricing = pricing;
        this.isBusy = false;
        }
     },

 

    /* pass found participant into callback, stops on first match */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with found participant as argument or with null if not */
    /* callbackFunction (participant) => {} */
    findParticipant(functor, callbackFunction) { 
        let me = this;
        me.isBusy = true;
        setTimeout(() => {
            let result = this.participants.find(functor);
            (result === undefined) ? callbackFunction(null) : callbackFunction(result);
            me.isBusy = false;
        }, 100);
    },


    /* pass array of found participants into callback */
    /* functor - function that will be executed for elements of participants array */
    /* callbackFunction - function that will be executed with array of found participants as argument or empty array if not */
    /* callbackFunction (participantsArray) => {} */
    findParticipants(functor, callbackFunction) { 
        let me = this;
        me.isBusy = true;
        setTimeout(() => {
            let participantsArray = this.participants.filter(functor);
            callbackFunction (participantsArray); 
            me.isBusy = false;
        }, 100);
    },

    /* push new participant into this.participants array */
    /* callbackFunction - function that will be executed when job will be done */
    /* (err) => {} */
    addParticipant(participantObject, callbackFunction) {
        let me = this;
        me.isBusy = true;
        setTimeout(() => {
            try{
                if(typeof participantObject === 'object' && 'seniorityLevel' in participantObject){
                    this.participants.push(participantObject);
                    callbackFunction();     
                }else{
                   throw new Error('Wrong Data!');
                }
            }catch(err){
                callbackFunction(err);   
                }
            me.isBusy = false;
        }, 100);
     },

    /* push new participant into this.participants array */
    /* callback should receive removed participant */
    /* callbackFunction - function that will be executed with object of removed participant or null if participant wasn't found when job will be done */
    removeParticipant(participantObject, callbackFunction) {
        let me = this;
        me.isBusy = true;
        setTimeout(() => {
            let removedParticipant = null;
            for (var i = 0; i < this.participants.length; i++){
                if(this.participants[i] == participantObject){
                    removedParticipant = this.participants.splice(i, 1)[0];
                    break;
                    }                        
                }
        callbackFunction(removedParticipant); 
            me.isBusy = false;
        }, 100);
     },

    /* Extends this.pricing with new field or change existing */
    /* callbackFunction - function that will be executed when job will be done, doesn't take any arguments */
    setPricing(participantPriceObject, callbackFunction) { 
        let me = this;
        me.isBusy = true;
        setTimeout(() => {
            Object.assign(this.pricing, participantPriceObject);
            callbackFunction();
            me.isBusy = false;
        }, 100);
    },

    /* calculates salary of all participants in the given period */
    /* periodInDays, has type number, one day is equal 8 working hours */
    calculateSalary(periodInDays) { 
        const workDay = 8;
        let salary = this.participants.reduce((sum, i) => {
            return sum + this.pricing[i.seniorityLevel] * periodInDays * workDay;
        }, 0);

        if (!isNaN(salary)) {
            return salary;
        } else {
            throw new Error('Error')
        }
      }
    }


    let instance,
    createInstance = () => project,
    getInstance = () => instance || (instance = createInstance());

    return getInstance();
})();


/* реализация */
module.exports = {
    firstName: 'Irina',
    lastName: 'Korotkova',
    task: ProjectModule
}

//Где ProjectModule это объект с методом getInstance()
