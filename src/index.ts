import DivisionOperation from "./operations/DivisionOperation";

function makeSum() {
    let sum = new DivisionOperation();
    console.log("result", sum.run(10,5,0))
}

makeSum()