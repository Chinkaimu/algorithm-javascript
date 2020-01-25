/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 优化：temp命名修改为stack，命名要更加语义化
    const stack = [];
    for (let i in s) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[' ) {
            stack.push(s[i]);
        // 优化：由于字符串只有'(', ')', '{', '}', '[', ']' 所以可以通过mapper减少else if的判断。代码也更清晰！！重复的代码需要抽象。
        /**
         * const mapper = {
         *  '{' : '}',
         *  '[' : ']',
         *  '(' : ')'
         * }
         * 
         * else {
         *  const peak = stack.pop();
         *  if ( v !== mapper[peak]) {
         *      return false;
         *  }
         * }
         */
        } else if (s[i] === ')' && stack.pop() !== '(') {
            return false;
        } else if (s[i] === '}' && stack.pop() !== '{') {
            return false;
        } else if (s[i] === ']' && stack.pop() !== '[') {
            return false;
        } 
    }
    if(stack.length > 0) return false;
    return true;
};

console.log(isValid('('));
console.log(isValid(')'));
console.log(isValid('(]'));
console.log(isValid('()[]{}'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
console.log(isValid('{[]}'));

/**
 *【总结】
 * 数据结构：栈，JS通过Array数组模拟。 注意不要与入push出shift的队列混淆。
 * TODO：如果让你检查XML标签是否闭合如何检查， 更进一步如果要你实现一个简单的XML的解析器，应该怎么实现？
 * 问题分析应该更清晰一些，确保每一个测试用例分之，特别是边缘情况。
 */