function minRemoveToMakeValid(s) {
  const stack = [];
  const str = s.split('');

  for (let i=0;i<s.length;i++) {
    const ch = s[i];

    // if opening paren found, push its index onto the stack
    if (ch === '(') {
      stack.push(i);
    } else {
      // if a closing paren is found
      if (ch === ')') {
        // if there is a matching opening paren in the stack, pop it
        if (stack.length) {          
          stack.pop();
          // if there is no matching opening paren
          // remove the current closing paren by setting it to an empty string
        } else {
          str[i] = '';
        }
      }
    }
  }

  // remove any remaining unmatched opening paren
  for (let i of stack) {
    str[i] = '';
  }

  return str.join('');
};