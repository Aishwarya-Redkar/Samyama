/*let obj = {
    name: "John",
    age:21
}
console.log(obj);
console.log(obj.name);
console.log(obj.age);
*/


let obj = {
    name: "John",
    age: 21,
    fun: function(){
        return "I am function";
    },
    arr:[10,20,30,40]

    }
    obj.key = "item";
console.log(obj.fun());
console.log(obj.arr);
console.log(obj);


let a="Key2";
obj[a]="item2";
console.log(obj);