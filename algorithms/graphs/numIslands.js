// Find number of islands in a 2D binary matrix
// This is a depth-first search solution
function numIslands(grid) {
  let count = 0;

  // interate the rows and columns of our grid
  for (let i=0;i<grid.length;i++) {
    for (let j=0;j<grid[i].length;j++) {
      if (grid[i][j] === '1') {
        count = count + dfs(grid, i, j);
      }
    }
  }

  function dfs(grid, row, col) {
    // check our base cases
    if (row < 0 || row > grid.length - 1 
      || col < 0 || col > grid[row].length - 1
      || grid[row][col] === '0') {
      return;
    }

    // 'sink' the island - mark visited nodes as 0
    grid[row][col] = '0';

    // recursive calls
    dfs(grid, row+1, col); // down
    dfs(grid, row-1, col); // up
    dfs(grid, row, col+1); // right
    dfs(grid, row, col-1); // left

    return 1;
  }

  return count;
}