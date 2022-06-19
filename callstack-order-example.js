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
   console.log('1 Executed on callstack');
   return `Hello, my name is ${person.name}, im ${person.age} and a ${person.profession} ! `;
 }

 const contryPresentation = (countries) => {
   console.log('2  Executed on callstack');
   return `I'd really like to live in ${countries.uk.city} - ${countries.uk.district} and enjoy your team!`;
 } 

 const integratePersonAndContry = (personPresentationCallback, contryPresentationCallback) => {
   const res1 = personPresentationCallback(person);
   const res2 = contryPresentationCallback(countries);
   return res1 + res2; 
 }

const presentationResult = integratePersonAndContry(personPresentation, contryPresentation);

console.log(presentationResult);

console.log('3 Main code completed');


//MICRO TASK
   ///PROMISES
   const afterPresenting = (isAsync) => {
      return new Promise(resolve =>{ 
         setTimeout(() => {
            resolve(console.log(`${isAsync ? '6 Executed after the macro cause of timeout even in micro' : '4 Executed before macro cause out of timeout and in micro'}`));
         }, isAsync ? 5000 : 0);
      });
   }

   const asyncPresenting = async(isAsync) => {
      await afterPresenting(isAsync);
      console.log('7 And this will execute only after getting the timeout done even in micro');
      
   }
   afterPresenting()
   asyncPresenting(true);

   

// MACRO TASK
setTimeout(() => {
   console.log('5 This, will execute before finishing the async operation wich was already triggered, although is a macro task') 
});



