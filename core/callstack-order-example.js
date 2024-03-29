//CALLBACK
const person = {
  name: "Diego",
  age: "33",
  profession: "Software Engineer",
};

const countries = {
  uk: {
    city: "London",
    district: "Hampstead",
  },
  br: {
    city: "São Paulo",
    district: "Consolação",
  },
  es: {
    city: "Barcelona",
    district: "Badalona",
  },
};

const personPresentation = (person) => {
  console.log("1 Executed on callstack");
  return `Hello, my name is ${person.name}, im ${person.age} and a ${person.profession} ! `;
};

const contryPresentation = (countries) => {
  console.log("2  Executed on callstack");
  return `I'd really like to live in ${countries.uk.city} - ${countries.uk.district} and enjoy your team!`;
};

const integratePersonAndContry = (
  personPresentationCallback,
  contryPresentationCallback
) => {
  const res1 = personPresentationCallback(person);
  const res2 = contryPresentationCallback(countries);
  return res1 + res2;
};

const presentationResult = integratePersonAndCountry(
  personPresentation,
  contryPresentation
);

console.log(presentationResult);

console.log("3 Main code completed");

process.nextTick(() => {
  console.log("3.1 Next");
});

//MICRO TASK
//Object.observe --- DEPRECATED
//MutationObserver --- NON NODEJS ATTRIBUTE

///Promises
const afterPresenting = (isAsync) => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        resolve(
          console.log(
            `${
              isAsync
                ? "6 Async method executed after 6s"
                : "4 Executed before timeout, promise microtask"
            }`
          )
        );
        process.nextTick(() => {
          isAsync ? console.log("6.1 Next") : console.log("4.1 Next");
        });
      },
      isAsync ? 5000 : 0
    );
  });
};

//Async await
const asyncAfterPresenting = async (isAsync) => {
  await afterPresenting(isAsync);
  console.log("7 Executed after async method");
  process.nextTick(() => {
    console.log("7.1 Next");
  });
};
afterPresenting();
asyncAfterPresenting(true);

// MACRO TASK
setTimeout(() => {
  console.log(
    "5 This, will execute before finishing the async operation wich was already triggered, although is a macro task"
  );
  process.nextTick(() => {
    console.log("5.1 Next");
  });
});
