import { Puzzle } from './types';

function generateClues(solution: number[][]): { rowClues: number[][], colClues: number[][] } {
  const rowClues: number[][] = [];
  const colClues: number[][] = [];

  // Generate row clues
  for (let i = 0; i < solution.length; i++) {
    const clue: number[] = [];
    let count = 0;
    for (let j = 0; j < solution[i].length; j++) {
      if (solution[i][j] === 1) {
        count++;
      } else if (count > 0) {
        clue.push(count);
        count = 0;
      }
    }
    if (count > 0) clue.push(count);
    rowClues.push(clue.length > 0 ? clue : [0]);
  }

  // Generate column clues
  for (let j = 0; j < solution[0].length; j++) {
    const clue: number[] = [];
    let count = 0;
    for (let i = 0; i < solution.length; i++) {
      if (solution[i][j] === 1) {
        count++;
      } else if (count > 0) {
        clue.push(count);
        count = 0;
      }
    }
    if (count > 0) clue.push(count);
    colClues.push(clue.length > 0 ? clue : [0]);
  }

  return { rowClues, colClues };
}

// Easy puzzles (5x5)
const heartSolution = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
];

const houseSolution = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
];

const treeSolution = [
  [0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
];

// Medium puzzles (10x10)
const catSolution = [
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
];

const starSolution = [
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Hard puzzle (15x15)
const butterflyolution = [
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
];

export const puzzles: Puzzle[] = [
  {
    id: 'heart',
    name: 'Heart',
    difficulty: 'easy',
    size: 5,
    solution: heartSolution,
    ...generateClues(heartSolution),
  },
  {
    id: 'house',
    name: 'House',
    difficulty: 'easy',
    size: 5,
    solution: houseSolution,
    ...generateClues(houseSolution),
  },
  {
    id: 'tree',
    name: 'Tree',
    difficulty: 'easy',
    size: 5,
    solution: treeSolution,
    ...generateClues(treeSolution),
  },
  {
    id: 'cat',
    name: 'Cat',
    difficulty: 'medium',
    size: 10,
    solution: catSolution,
    ...generateClues(catSolution),
  },
  {
    id: 'star',
    name: 'Star',
    difficulty: 'medium',
    size: 10,
    solution: starSolution,
    ...generateClues(starSolution),
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    difficulty: 'hard',
    size: 15,
    solution: butterflyolution,
    ...generateClues(butterflyolution),
  },
];
