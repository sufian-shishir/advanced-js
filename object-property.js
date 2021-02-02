const students = [
    {id: 21, name:'Omar Sunny'},
    {id: 31, name:'Mannnaaaa'},
    {id: 41, name:'Moyori'},
    {id: 71, name:'DeepJol'}
];
// const studentsName = [];
// for (let i  = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name;
//     studentsName.push(name);
// }
// console.log(studentsName);


// const names = students.map(s => s.name);
// console.log(names);
// const ids = students.map(s => s.id);
// console.log(ids);



const bigger = students.filter(s => s.id>40);
console.log(bigger);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);