type Clone = {
  name: string;
  age: number;
  gender: string;
};

let cloneList1 = [
  {
    name: "Boba Fett",
    age: 5,
    gender: "male",
  },
  {
    name: "Jango Fett",
    age: 35,
    gender: "male",
  },
  {
    name: "Mace Windu",
    age: 40,
    gender: "male",
  },
];

let cloneList2 = [
  {
    name: "Yoda",
    age: 800,
    gender: "male",
  },
  {
    name: "Princess Amidala",
    age: 25,
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    age: 20,
    gender: "male",
  },
];

let cloneList3 = [
  {
    name: "Obi-Wan Kenobi",
    age: 40,
    gender: "male",
  },
  {
    name: "Rey",
    age: 20,
    gender: "female",
  },
  {
    name: "Ben Solo",
    age: 20,
    gender: "male",
  },
];

function createCloneArmy(clones: Clone[], count:number): Clone[] | null {
  let result: string | null = "";

 
  return null;
}

let result1: Clone[] | null = createCloneArmy(cloneList1, 25);
let result2: Clone[] | null = createCloneArmy(cloneList2, 101);
let result3: Clone[] | null = createCloneArmy(cloneList3, 15);

console.log(result1);
console.log(result2);
console.log(result3);

export {};
