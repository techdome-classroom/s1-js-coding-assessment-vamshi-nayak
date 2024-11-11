const getTotalIsles = function (map) {
  if (!map || map.length === 0) return 0;

  const numRows = map.length;
  const numCols = map[0].length;
  let islandCount = 0;

  const bfs = (startRow, startCol) => {
    const queue = [[startRow, startCol]];
    map[startRow][startCol] = 'W';

    while (queue.length > 0) {
      const [currentRow, currentCol] = queue.shift();

      const directions = [
        [0, 1],   
        [1, 0],   
        [0, -1],  
        [-1, 0]  
      ];

      for (const [dRow, dCol] of directions) {
        const newRow = currentRow + dRow;
        const newCol = currentCol + dCol;

        if (
          newRow >= 0 &&
          newRow < numRows &&
          newCol >= 0 &&
          newCol < numCols &&
          map[newRow][newCol] === 'L'
        ) {
          map[newRow][newCol] = 'W'; 
          queue.push([newRow, newCol]);
        }
      }
    }
  };

  
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (map[row][col] === 'L') {
        islandCount++;
        bfs(row, col);
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
