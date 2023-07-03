Script1 feladat:
You get a bunch of raw data from browser history, but you only care about the sitename the user visited.

Write a function (getSiteName), which has url as parameter and returns only the sitename. The return value's first character must be capital letter.

https://codecool.com/ -> Codecool
https://twitter.com/ –> Twitter
http://nemzetisport.hu/ –> Nemzetisport

Script2 feladat:
Fill the function getLongestEnglishComedy which has a movies parameter.
It takes an array of movies described in the schema below, and returns the name of the longest English comedy. The function should return null if there are no relevant movies in the array.

A movie looks like this:
{
  "title": "Titanic",
  "genre": "drama",
  "originalLanguage": "english",
  "length": 180
}

Script3 feladat:
Fill the createCloneArmy function , which has a person and a number as parameter and should return an array . The returned array has as many identical people in it as the second parameter says - but at most 100.

Example:
Input object example for person parameter:
{ 
  name: "Jango Fett",
  age: 35,
  gender: "male"
}

Input example for number parameter:
3 // integer

returned array:
[
  { name: "Jango Fett", age: 35, gender: "male" },
  { name: "Jango Fett", age: 35, gender: "male" },
  { name: "Jango Fett", age: 35, gender: "male" },
]