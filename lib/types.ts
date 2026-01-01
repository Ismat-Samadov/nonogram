export type CellState = 'empty' | 'filled' | 'marked';

export interface Puzzle {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  size: number;
  solution: number[][];
  rowClues: number[][];
  colClues: number[][];
}

export interface GameState {
  grid: CellState[][];
  isComplete: boolean;
  moves: number;
  startTime: number;
  endTime?: number;
}
