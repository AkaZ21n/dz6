// 1
const a = ['1']
const b = ['2']
const c = ['3']
const d = ['4']
const i = ['5']
const array =a.concat(b,c,d,i);

console.log(array)
//

// 2
const user = {
    name: "Zainab",
    surname: "Nurmatova",
    age: 28,
    birthday: 1994,
    profession: "developer"
};
const user2 = {
    ...user,
    key: "value",
    key2: "value2",
    key3: "value3"
}
console.log(user2)
//

// 3
document.querySelector('.Jack').onclick = myClick;

function myClick() {

 let a = document.querySelector('.name').value;
 console.log(a);

 document.querySelector('.hello').innerHTML += a
}
//