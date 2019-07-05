// IS
function proposition(label) {
  return { proposition: label }
}

// NOT
function negation(label) {
  return { negation: label }
}

// AND
function conjunction(a, b) {
  return { conjunction: [a, b] }
}

// OR
function disjunction(a, b) {
  return { disjunction: [a, b] }
}

function evaluate(formula, state) {
  if (formula.proposition) {
    return state[formula.proposition] || false;
  } else if (formula.negation) {
    return !state[formula.negation] || true;
  } else if (formula.disjunction) {
    return evaluate(formula.disjunction[0], state) || evaluate(formula.disjunction[1], state);
  }
}

module.exports = { disjunction, negation, proposition, evaluate }
