/* function calculate(a, b) {
  return a+b
}

//==> es6 
const calculate=(a,b)=>a+b; */

//with js
/* const table=[5,6,7] */

/* for(let i=0;i<table.length;i++){
table[i]=table[i]+1
}
console.log(table) */
//parcourir le tab leau avec es6
/* const array=table.map((elt)=>{
 return elt+1
})
 */
//----------with condition :map
/* const table=[-1,-2,3,4,5];
const array =table.map((element)=>{
  if(element>0){
    return element+1
  }
  return element
})
console.log(array) */
//--filter function
/* const table =[-1,-1,3,5,4]

const array=table.filter((elt)=>elt>0)
console.log(array) */
//--filter es6
/* const table = [{ name: 'rana', age: 21 }, { name: 'islem', age: 22 }, { name: 'asma', age: 25 }, { name: 'bechir', age: 35 }]
const array = table.filter((elt) => elt.age >= 22)
console.log(array) */

//----map with two parameter

/* const table =[5,6,7]
const array =table.map((x,index)=>{
  if(index===0){
    return x
  }
  return x+1
})
console.log(array) */
//find function es6

/* const table = [{ name: 'rana', age: 21 }, { name: 'islem', age: 22 }, { name: 'asma', age: 25 }, { name: 'bechir', age: 35 }]
const element=table.find((elt)=>elt.age>21)
console.log(element) */
//let i=0;
//--scope local global
/* function sayHello(){

    console.log(i)
  }
  
  sayHello()
  for(let i=0;i<2;i++){
    console.log(i)
  }
  for(let i=0;i<2;i++){
    console.log(i) */
    //-----literal template
/*     const name ='islem'
const x="hello "+name
console.log(x)
console.log(`hello ${name}`) */
//--const person={firstName:"asma",lastName:"ben khlifa"}
//dot notation
/* console.log(person.firstName) */
//destructring--------------------------------
/* const {firstName,lastName}=person
console.log(firstName);
console.log(lastName) */
//const {firstName,lastName}=person
/* let user =firstName+" "+lastName
console.log(user) */
/* const person = { firstName: 'asma', lastName: 'khlifi' }; */
//-----spread operator 

/* const user={email:'rana@gmail.com',password:'141111'}
const newUser={age:19,sex:'female',...user}
console.log(newUser) */
//----- spread operator

/* const table=['red','yello']
console.log(...table)
const newTable=[...table,'blue']
console.log(newTable)
 */