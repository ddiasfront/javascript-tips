//CALLBACK
 const person = {
   name: 'Diego',
   age: '33',
   profession: 'Software Engineer'
 };

 const countries = {
   uk: {
      city: 'London',
      district: 'Hampstead'
   }, 
   br: {
      city: 'São Paulo',
      district: 'Consolação'
   },
   es: {
      city: 'Barcelona',
      district: 'Badalona'
   }
 }

 const personPresentation = (person) => {
   console.log('Callback 1');
   return `Hello, my name is ${person.name}, im ${person.age} and a ${person.profession} ! `;
 }

 const contryPresentation = (countries) => {
   console.log('Callback 2');
   return `My dream is work as a software engineer in ${countries.uk.city} and to be living in ${countries.uk.district} !`;
 }

 const integratePersonAndContry = (personPresentationCallback, contryPresentationCallback) => {
   const res1 = personPresentationCallback(person);
   const res2 = contryPresentationCallback(countries);
   return res1 + res2; 
 }

const presentationResult = integratePersonAndContry(personPresentation, contryPresentation);

console.log(presentationResult);

console.log('Main code completed');


//MICRO TASK
// MACRO TASK


// setTimeout(() => {
//    console.log('Task 1 Completed') 
// }, 200);



