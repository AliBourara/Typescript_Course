enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Link",
  age: 34,
  hobbies: ["Gaming", "Music"],
  role: Role.ADMIN,
};

let favotiteActivities: any[]; // any type in the array
favotiteActivities = ["Sports", 1];

console.log(person.name);
