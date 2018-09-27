function isBalanced(str) {
  var stack = [];
  const allowedSymbols = '()[]{}';

  for (let i = 0, l = str.length; i < l; i++) {
    var symbolPosition = allowedSymbols.indexOf(str[i]);

    if (!~symbolPosition) continue;

    if (symbolPosition % 2 === 0)
      stack.push(symbolPosition + 1);
    else if (stack.pop() !== symbolPosition)
      return false;
  }
  return stack.length === 0;
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter a new text to validate for allowed symbols> '
});

rl.prompt();

rl.on('line', (line) => {
  if (isBalanced(line))
    console.log(`The inserted text: \n'${line}' is valid`);
  else
    console.log(`The inserted text: \n'${line}' isn't valid`);
  rl.close();
});