function roundCoord(x) {
  return [x[0].toFixed(2),x[1].toFixed(2)];
}

function drawLine(x,y) {
  console.log('('+roundCoord(x)+') - ('+roundCoord(y)+')');
}

function drawHTree(c, l, d) {
  if (d===0) {
    return;
  }
  drawLine([c[0]-l/2,c[1]],[c[0]+l/2,c[1]])
  drawLine([c[0]-l/2,c[1]+l/2],[c[0]-l/2,c[1]-l/2])
  drawLine([c[0]+l/2,c[1]+l/2],[c[0]+l/2,c[1]-l/2])
  console.log('Drew the H-tree with center at '+roundCoord(c));

  drawHTree([c[0]-l/2,c[1]+l/2], l/Math.pow(2,0.5), d-1)
  drawHTree([c[0]-l/2,c[1]-l/2], l/Math.pow(2,0.5), d-1)
  drawHTree([c[0]+l/2,c[1]+l/2], l/Math.pow(2,0.5), d-1)
  drawHTree([c[0]+l/2,c[1]-l/2], l/Math.pow(2,0.5), d-1)
}

drawHTree([0,0], 2, 3)

/*
Time Complexity: every call of drawHTree invokes 9 expressions whose time complexity is O(1) and 4 calls of drawHTree until depth (denoted here as D) reaches to 0. Therefore: T(D) = 9 + 4 * T(D-1), where T is the time complexity function and D is the depth of the H-Tree. Now, if we expand T(D-1) recursively all the way to T(0), it’ll be easy to see that T(D) = O(4^D).

Space Complexity: recursive calls add overhead since we store them in the execution stack. The space occupied in the stack will be then O(D), in the worst case scenario. The stack space occupied will be no more than O(D) at any given point since a sibling drawHTree will not be called before the current one being executed returns (i.e. finishes its execution).
*/
