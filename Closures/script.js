// Example # 01
function sum(a, b, c){
    return {
        sumTwo: function(){
            return a+b;
        },
        sumThree: function(){
            return a+b+c;
        }
    }
}
var sumValues = sum(1, 5, 9);
console.log(sumValues.sumTwo());
console.log(sumValues.sumThree());

// Example # 02
function outer(a) {
    console.log(a);
    function inner(b) {
        console.log(`${b} is a good ${a}`);
    }
    return inner;
}
const store = outer("Programmer");
store("Hadi");
