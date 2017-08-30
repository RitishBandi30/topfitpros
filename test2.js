/**
 * Test 2
 * Choose one of the following
 */

/**
 * Fix the function so that it returns [4,[1],[2],[3],[4]];
 */

var count = 4;
function foo() {
  var table = [count];
  while (count-- > 0) {
    table.push([count]);// Passing count into table
  }
  for (var count1 = 1; count1 < table.length; count1++) { 
    table[count1] = [table[count1][0] + (count+2)];// 
  }
  return table;
}

console.log(foo());

////////
// OR //
////////

/*
 * The desired result is a countdown from 5 to 0 using console log messages. 
 * Explain why the code only logs -1, then fix the code so it works as expected.
 */
/*
The code returns -1 since the value of i is incremented to 6 by the time 
the callback function in setTimeout is called. To avoid this we call setTimeout
for every iteration of FOR loop.

*/
function countdown (num) {
  
    for (var i = 0; i <= num; i += 1) {  
    function result(i) {
        setTimeout(function () {
            console.log(num-i);
        }, i * 1000);
    }
    result(i);
  }
}


// countdown(5);
