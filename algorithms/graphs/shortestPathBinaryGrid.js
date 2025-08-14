/*
  We are tasked with finding the shortest path; BFS is ideal here and always explores level by level
*/
function shortestPathBinaryMatrix(grid) {
  if (grid[0][0] === 1) return -1;

  // All the 8 possible directions we can move in the grid
  // in either a up,down,left,right and also diagonal in 4 directions
  let dirs = [
    [1,1], [1,0], [1,-1], [0,-1],
    [-1,-1], [-1,0], [-1,1], [0,1],
  ];

  /*
    our queue stores triplets in the format [x,y,count]
    x = current row index
    y = current column index
    count = number of steps taken from the start to reach this cell

    let queue = [[rowIndex, columnIndex, numSteps]]
  */
  // populate queue with our starting grid and distance count which is 1
  let queue = [[0, 0, 1]];

  // As long as we have nodes to explore, this while loop continues
  while (queue.length) {
    /*
     Here we dequeue our first element in the queue (FIFO)
     */
    const [currX, currY, count] = queue.shift();

    // now that we've removed an element from our queue,
    // we can check if we've reached our goal
    // we are checking if our current row and column match the far-right bottom cell
    if (currX === grid.length - 1 && currY === grid[0].length - 1) {
      return count;
    }

    // next, we explore all 8 directions - diagonal, vertical, horizontal
    for (let [x,y] of dirs) {
      let [nextX, nextY] = [currX + x, currY + y];

      // we next need to check boundaries and obstacles
      if (nextX < 0 || nextX > grid.length - 1 ||
          nextY < 0 || nextY > grid[0].length - 1 ||
          grid[nextX][nextY] === 1
      ) continue;

      // Add neighbor to BFS queue
      queue.push([nextX, nextY, count + 1]);

      // Mark neighbor as visited (effectively turning cell into a wall so it doesn't get revisted)
      grid[nextX][nextY] = 1; // Prevents infinite loops!!!
    }
  }

  return -1;
}