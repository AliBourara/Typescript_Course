

const person:{
    name:string;
    age:number;
    hobbies:string[];
    role:[number,string]; // assaigne Tuple
}={
    name : 'Link',
    age:34,
    hobbies: ['Gaming','Music'],
    role:[2,'author'] //Type Tuple /!-Note: you can " .puch() " in the Tuple thats the only exeption !
};



let favotiteActivities :any[]; // any type in the array 
favotiteActivities = ['Sports',1]

console.log(person.name);
