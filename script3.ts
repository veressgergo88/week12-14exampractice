type Clone = {
  name: string;
  age: number;
  gender: string;
};

let clonePerson1 = {
    name: "Boba Fett",
    age: 5,
    gender: "male",
  }

let clonePerson2 = 
  {
    name: "Princess Amidala",
    age: 25,
    gender: "female",
  }

let clonePerson3 = 
  {
    name: "Obi-Wan Kenobi",
    age: 40,
    gender: "male",
  }

function createCloneArmy(person: Clone, count: number): Clone[] {
  let result: Clone[] = [];

  let i = 0;
  if (count <= 100) {
    while (i !== count) {
      result = [...result, person];
      i++;
    }
  } else {
    while (i !== 100) {
      result = [...result, person];
      i++;
    }
  }

  return result;
}

let result1: Clone[] = createCloneArmy(clonePerson1, 25);
let result2: Clone[] = createCloneArmy(clonePerson2, 101);
let result3: Clone[] = createCloneArmy(clonePerson3, 15);

console.log(result1);
console.log(result2);
console.log(result3);

export {};
