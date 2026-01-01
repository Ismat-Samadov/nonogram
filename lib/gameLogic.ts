import { CellState, Puzzle, GameState } from './types';

export function createEmptyGrid(size: number): CellState[][] {
  return Array(size).fill(null).map(() => Array(size).fill('empty'));
}

export function checkSolution(grid: CellState[][], solution: number[][]): boolean {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const shouldBeFilled = solution[i][j] === 1;
      const isFilled = grid[i][j] === 'filled';

      if (shouldBeFilled !== isFilled) {
        return false;
      }
    }
  }
  return true;
}

export function initializeGame(puzzle: Puzzle): GameState {
  return {
    grid: createEmptyGrid(puzzle.size),
    isComplete: false,
    moves: 0,
    startTime: Date.now(),
  };
}

export function formatTime(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function toggleCell(
  grid: CellState[][],
  row: number,
  col: number,
  fillMode: boolean
): CellState[][] {
  const newGrid = grid.map(r => [...r]);

  if (fillMode) {
    // Left click cycling: empty -> filled -> empty
    newGrid[row][col] = newGrid[row][col] === 'filled' ? 'empty' : 'filled';
  } else {
    // Right click cycling: empty -> marked -> empty
    newGrid[row][col] = newGrid[row][col] === 'marked' ? 'empty' : 'marked';
  }

  return newGrid;
}
