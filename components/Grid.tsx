'use client';

import { CellState, Puzzle } from '@/lib/types';
import Cell from './Cell';
import Clues from './Clues';
import { motion } from 'framer-motion';

interface GridProps {
  puzzle: Puzzle;
  grid: CellState[][];
  onCellClick: (row: number, col: number, fillMode: boolean) => void;
}

export default function Grid({ puzzle, grid, onCellClick }: GridProps) {
  const { size, rowClues, colClues } = puzzle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-block bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl shadow-2xl"
    >
      {/* Column clues */}
      <div className="flex">
        <div className={size <= 5 ? 'w-16 h-16' : size <= 10 ? 'w-12 h-12' : 'w-8 h-8'} />
        {colClues.map((clue, idx) => (
          <div key={idx} className="flex flex-col items-center justify-end pb-2">
            <Clues clues={clue} isRow={false} size={size} />
          </div>
        ))}
      </div>

      {/* Grid with row clues */}
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {/* Row clue */}
          <div className="flex items-center justify-end pr-2">
            <Clues clues={rowClues[rowIdx]} isRow={true} size={size} />
          </div>

          {/* Cells */}
          {row.map((cell, colIdx) => (
            <Cell
              key={`${rowIdx}-${colIdx}`}
              state={cell}
              onClick={() => onCellClick(rowIdx, colIdx, true)}
              onRightClick={() => onCellClick(rowIdx, colIdx, false)}
              size={size}
            />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
