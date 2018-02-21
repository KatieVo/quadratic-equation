module.exports = function solveEquation(equation) {
    var result = [];
  equation = equation.replace(/\s+/g, '').match(/(\+|-)?\d+/g);
  equation.splice(1, 1);
  var disc = Math.pow(equation[1], 2) - 4*equation[0]*equation[2];
  var x1 = Math.round((-1*equation[1] + Math.sqrt(disc))/(2*equation[0]));
  var x2 = Math.round((-1*equation[1] - Math.sqrt(disc))/(2*equation[0]));
  (x1 < x2) ? result.push(x1, x2) : result.push(x2, x1);
   return result;
}
