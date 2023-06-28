
const afterPresenting = (numberOfExecution, time) => {
  return new Promise(resolve =>{ 
  console.log(`${numberOfExecution} EXECUTING PROMISE ON BACKGROUND PUSHED TO MICROTASK`)
    setTimeout(() => {
      console.log(`${numberOfExecution}, Promise ${numberOfExecution}, executed`)
      resolve(numberOfExecution);
    }, time || 500);
  });
}

async function afterPresentAsync(numberOfExecution) {
  const x = afterPresenting(numberOfExecution);
  return x;
}



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
    //1 - POPS OUT THE FIRST FUNCTION FROM QUEUE, EXECUTING IT
    console.log('1 Executed on callstack');
    return `Hello, my name is ${person.name}, im ${person.age} and a ${person.profession} ! `;
  }
 
  const contryPresentation = (countries) => {
    // 2 - POPS OUT THE SECOND FUNCTION FROM QUEUE, EXECUTING IT
    console.log('2  Executed on callstack');
    return `I'd really like to live in ${countries.uk.city} - ${countries.uk.district} and enjoy your team!`;
  } 
 
  const integratePersonAndContry = (personPresentationCallback, contryPresentationCallback) => {
    // 0.1 - START PUSHING FUNCTIONS TO EXECUTE AT CALLSTACK QUEUE
    // 1 - PUSHES THE FIRST FUNCTION
    const res1 = personPresentationCallback(person);
    // 2 - PUSHES THE SECOND FUNCTION
    const res2 = contryPresentationCallback(countries);
    return res1 + res2; 
  }


 afterPresenting('0', 5000);
 const presentationResult = integratePersonAndContry(personPresentation, contryPresentation);

  //0 - THE CODE STARTS EXECUTING HERE.
 console.log(presentationResult);

 afterPresentAsync('3.2').then((x) => {
  console.log(x, 'ASYNC CODE GOT');
 })
 //3 - BACK TO CALLSTACK QUEUE
 console.log('3 Main code completed');
 
 //4 - THIS IS JUST AN INTRUDER, TO SHOW HOW NEXTTICK WORKS, EACH TIME THE CALLSTACK ARE EMPTY IT CALLS THE NEXT TICK AGAIN
 process.nextTick(() => {console.log('3.1 Next')});
 
 // OK, NOW WE'VE SETTED CALLSTACK QUEUE TO WORK, THAT'S A GOOD START
  // NOW LET'S GET INTO MACRO AND MICRO TASKS.
  // CREATED A PROMISE ON TOP OF CODE, LET'S USE IT



//  //MICRO TASK 
//     //Object.observe --- DEPRECATED
//     //MutationObserver --- NON NODEJS ATTRIBUTE
    
//     ///Promises
//     const afterPresenting = (isAsync) => {
//        return new Promise(resolve =>{ 
//           setTimeout(() => {
//              resolve(console.log(`${isAsync ? '6 Async method executed after 6s' : '4 Executed before timeout, promise microtask'}`));
//              process.nextTick(() => {isAsync ? console.log('6.1 Next') : console.log('4.1 Next')});
//           }, isAsync ? 5000 : 0);
//        });
//     }
 
//     //Async await
//     const asyncAfterPresenting = async(isAsync) => {
//        await afterPresenting(isAsync);
//        console.log('7 Executed after async method');
//        process.nextTick(() => {console.log('7.1 Next')});
       
//     }
//     afterPresenting()
//     asyncAfterPresenting(true);
    
//  // MACRO TASK
//  setTimeout(() => {
//     console.log('5 This, will execute before finishing the async operation wich was already triggered, although is a macro task');
//     process.nextTick(() => {console.log('5.1 Next')});
//  });
 
 
 