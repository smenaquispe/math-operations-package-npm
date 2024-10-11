import SumOperation from "./operations/SumOperation";
import SubstractionOperation from "./operations/SubstractionOperation";

function makeSum() {
    let sum = new SumOperation();
    console.log(sum.run(4,3,1))

    let sub = new SubstractionOperation();
    console.log(sub.run(5,4,3))
}

makeSum()