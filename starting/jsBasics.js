// forEach map filter find indexOf

let arr = [1,2,3,4];
arr.forEach((value) => {
    console.log(value + " hello")
})




// map array pe hi chalta hai
// map ek naya array return krega
// naye array me utne hi elements honge jitne pehle wale usme honge
// yahan kaam aata hai
// given array se ek aur array banana ho to
// jaise main chahta hu ki 'arr' mein kuch operation hoke naye array mein mile

const newArr = arr.map(function(val){
    console.log(val+2);
})
const newArrr = arr.map(function(val){
    return val+2;
})
console.log(newArr);
console.log(newArrr); // return lgane se hi humko ye ek saath milega poora




// filter me hum dhoondhenge 
// aur jo hmare criteria me fit hoga, voh hum rakh lenge
// naye array mein kaam hoga
// filter kaahe pe kaam krta hai, ki true hai ya false return ho rha hai

const filtered = arr.filter(function (morethan2) {
    return morethan2 > 2;
})
const filtered2 = arr.filter(function (val) {
    if (val > 3) {
        return true;
    }
    else return false;
})
console.log(filtered)
console.log(filtered2);




// array mein kuch bhi dhoondhne ka tarika hai find
// find humko kisi bhi cheez ka pehla instance laakar deta hai
// ye bhi filter ki tarah true false pe hi kaam karta hai
// ye bhi true ya false hi return krta hai

const firstLessThan4 = arr.find(function (val) {
    return val < 4;
})
const firstLessThan4one = arr.find(function (val) {
     if(val < 41){
        return val // or return true, dono kaam krenge
    };
})

console.log(firstLessThan4)
console.log(firstLessThan4one);




// indexOf 
// isko kisi bhi member ka index dhoondhne ke liye
// use krte hain

console.log(arr.indexOf(4));;