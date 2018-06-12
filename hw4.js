function largest() {
    let largest = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if(arguments[i] > largest) {
             largest = arguments[i];
        }
    }
    return largest;
}

function smallest() {
    let smallest = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
        if(arguments[i] < smallest) {
            smallest = arguments[i];
        }
    }
    return smallest;
}

console.log(largest(2, 0.1, -5, 100, 3)); //100
console.log(smallest(2, 0.1, -5, 100, 3)); //-5

function transform(baseArray) {
    return baseArray.map((item) => { return function () {
        return item;
    }})
}

const newArray = transform([10, 20, 30, 40, 50]);
console.log(newArray[3]()); // should return 40
console.log(newArray[4]()); // should return 50


function sum() {
   let summands = [].slice.call(arguments);
   return summands.length > 0 ? summands[0] + sum.apply(null, summands.slice(1)) : 0;
}

console.log(sum(1,3,5,7)); //16

function countDown(counter) {
   function run() {
        console.log(counter--);
        if (counter >= 0) setTimeout(run, 1000);
    }
    run();
}

countDown(3);


Function.prototype.myBind = function () {
    let func = this;
    let context = arguments[0];
    let args = [].slice.call(arguments, 1);
    return function(){
        let funcArgs = [].slice.call(arguments);
        return func.apply(context, args.concat(funcArgs));
    }
};

function addPropToNumber(number) { return this.prop + number; }
let bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1)); // 10
