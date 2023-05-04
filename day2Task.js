const data = [
  {
    name: "Alice",
    age: 25,
    gender: "female",
    role: "developer",
    profession: "software engineering",
  },
  {
    name: "Bob",
    age: 32,
    gender: "male",
    role: "manager",
    profession: "business administration",
  },
  {
    name: "Charlie",
    age: 42,
    gender: "male",
    role: "analyst",
    profession: "data analysis",
  },
  {
    name: "David",
    age: 29,
    gender: "male",
    role: "designer",
    profession: "graphic design",
  },
  {
    name: "Emily",
    age: 27,
    gender: "female",
    role: "engineer",
    profession: "mechanical engineering",
  },
  {
    name: "Frank",
    age: 35,
    gender: "male",
    role: "consultant",
    profession: "management consulting",
  },
  {
    name: "Grace",
    age: 24,
    gender: "female",
    role: "sales",
    profession: "marketing",
  },
  { name: "Henry", age: 38, gender: "male", role: "lawyer", profession: "law" },
  {
    name: "Isabel",
    age: 31,
    gender: "female",
    role: "doctor",
    profession: "medicine",
  },
  {
    name: "Jack",
    age: 26,
    gender: "male",
    role: "writer",
    profession: "creative writing",
  },
];

const groupByAge = data.reduce((p, c, i) => {
  const ageGroup = Math.floor(c.age / 10);
  const key = `${c.gender}_${ageGroup}0s`;
  if (p[key] === undefined) {
    p[key] = [];
  }
  p[key].push(c);
  return p;
}, {});

console.log(groupByAge);

// 30-39
// female_30s
// 25
// female_20s

const output = {
  male_30s: [],
  female_30s: [],
};
