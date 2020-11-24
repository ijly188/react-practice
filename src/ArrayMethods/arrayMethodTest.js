const students = [
  {
    name: 'Abby',
    age: 17,
    gender: 'female',
  },
  {
    name: 'Betty',
    age: 18,
    gender: 'female',
  },
  {
    name: 'Charlie',
    age: 16,
    gender: 'male',
  },
  {
    name: 'David',
    age: 19,
    gender: 'male',
  },
  {
    name: 'Emily',
    age: 18,
    gender: 'female',
  },
];

// 1
// expect ["Abby","Betty","Charlie","David","Emily"]
console.log(
  students.map(/* ? */)
);

console.log(
  students.map((item) => {
    return item.name
  })
);


// 2
// expect ["Miss Abby","Miss Betty","Mr. Charlie","Mr. David","Miss Emily"]
console.log(
  students.map(/* ? */)
);
console.log(
  students.map((item) => {
    (item.gender === 'female') ? (item.gender = 'Miss') : (item.gender = 'Mr')
    return item.gender + ' ' + item.name
  })
);


// 3
// expect [{"name":"Betty","age":18,"gender":"female"},{"name":"Emily","age":18,"gender":"female"}]
console.log(
  students.filter(/* ? */)
);
console.log(
  students.filter((item) => {
    return item.age === 18
  })
);

// 4
// expect 17.6
console.log(
  students.reduce(/* ? */)
);

console.log(
  students.reduce((acc, elem, idx, students) => {
    return acc + elem.age
  }, 0) / students.length
);