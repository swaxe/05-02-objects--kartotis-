let imoneObj1 = new Object();
imoneObj1['company name'] = 'Ferrari';
imoneObj1.opened = 1939;
imoneObj1.companyCode = 'NL0011585146';
imoneObj1.employees = 4571;
imoneObj1.ceo = 'Benedetto Vigna';
imoneObj1.nvo = false;
imoneObj1.workingLocation = ['Maranello', 'Modena'];
imoneObj1.activityAreas = ['Automotive1', 'Automotive2'];
imoneObj1.contacts = {};
imoneObj1.contacts.phone = 390536949713;
imoneObj1.contacts.email = 'museo@ferrari.com';
imoneObj1.contacts.adress = {};
imoneObj1.contacts.adress.country = 'Italy';
imoneObj1.contacts.adress.city = 'Maranello';
imoneObj1.contacts.adress.street = 'Via Alfredo Dino Ferrari';
imoneObj1.contacts.adress.appartment = 43;


let imoneObj2 = {
    'company name': 'Lamborghini',
    opened: 1963,
    companyCode: 'IT123456789',
    employees: 1779,
    ceo: 'Stephan Winkelmann',
    nvo: false,
    workingLocation: ['Ingolstadt', "Sant'Agata Bolognese"],
    activityAreas: ['Automotive1', 'Automotive2'],
    contacts: {
        phone: 390519597282,
        email: 'automobililamborghini@legalmail.it',
        adress: {
            country: 'Italy',
            city: 'S. Agata Bolognese',
            street: 'Via Modena',
            appartment: 12,
        },
    },
    getFullAdress: function() {
        return `Adress is: ${this.contacts.adress.street} ${this.contacts.adress.appartment}, ${this.contacts.adress.city}, ${this.contacts.adress.country}`;
    },
    setNvoFalse: function() {
        this.nvo = false
        return this.nvo
    },
    setNvoTrue: function() {
        this.nvo = true
        return this.nvo
    },
    setNvo: function() {
        this.nvo = !this.nvo
        return this.nvo
    },
    workingLocationToString: function () {
        this.workingLocation.join(', ')
        return this.workingLocation
    },
    activityAreasToString: function () {
        this.activityAreas.join(', ')
        return this.activityAreas
    },
    addWorkingLocation: function(add) {
        this.workingLocation.push(add)
        return this.workingLocation
    },
    addActivityAreas: function(add) {
        this.activityAreas.push(add)
        return this.activityAreas
    },
    removeWorkingLocation: function(workingLocationToRemove){
        this.workingLocation = this.workingLocation.filter(workingLocation => workingLocation !== workingLocationToRemove)
        return this.workingLocation
    },
    removeActivityAreas: function(activityAreasToRemove){
        this.activityAreas = this.activityAreas.filter(activityAreas => activityAreas !== activityAreasToRemove)
        return this.activityAreas
    },
};


console.log(imoneObj2)
console.log(imoneObj2.getFullAdress())
console.log(imoneObj2.setNvoTrue())
console.log(imoneObj2.setNvoFalse())
console.log(imoneObj2.workingLocationToString())
console.log(imoneObj2.activityAreasToString())
console.log(imoneObj2.addWorkingLocation('Modena'))
console.log(imoneObj2.addActivityAreas('Automotive3'))
console.log(imoneObj2.removeWorkingLocation('Modena'))
console.log(imoneObj2.removeActivityAreas('Automotive2A'))