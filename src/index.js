module.exports = function solveEquation(equation) {
    var result = [];

  equation = equation.replace(/\s+/g, '');
  var myRe = /(-|\+)\d+/g;
  var found = equation.match(myRe);
  if (found.length < 3) {
      var a = parseInt(equation, 10);
      var b = found[0];
      var c = found[1];
      return getSolution(a, b, c);
  } else {
      var a = found[0];
      var b = found[1];
      var c = found[2];
      return getSolution(a, b, c);
  }
  return result;

  function countDesc(a, b, c) {
      return b*b - 4*a*c;
  }

  function getSolution(a, b, c) {
      var desc = countDesc(a, b, c);
      var x1 = Math.round((-1*b + Math.sqrt(desc))/(2*a));
      var x2 = Math.round((-1*b - Math.sqrt(desc))/(2*a));
      (x1 < x2) ? result.push(x1, x2) : result.push(x2, x1);
      return result;
  }
}
