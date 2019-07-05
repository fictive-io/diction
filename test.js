const { disjunction, negation, proposition, evaluate } = require("./logic");

const sentence = disjunction(negation("p"), proposition("q"));
const world = {
  p: false
}

console.log(evaluate(sentence, world));
