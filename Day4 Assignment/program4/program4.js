let array = [
  {
    name: "paul",
    age: 30,
    country: "England",
    hobbies: ["Cooking", "drawing", "programming"],
  },
  {
    name: "manica",
    age: 28,
    country: "America",
    hobbies: ["cricket", "dancing", "cooking"],
  },
  {
    name: "ross",
    age: 25,
    country: "china",
    hobbies: ["reading", "laughing", "coding"],
  },

  {
    name: "stive",
    age: 27,
    country: "India",
    hobbies: ["gardening", "writting", "playing"],
  },
];

function arrayOfObjects() {
  console.log(array);
}

arrayOfObjects();

function ageObject() {
  let age;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    age = element.age;
    if (age < 30) {
      console.log(element);
    }
  }
}

function countryObject() {
  let country;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    country = element.country;
    if (country == "India") {
      console.log(element);
    }
  }
}

ageObject();

countryObject();
