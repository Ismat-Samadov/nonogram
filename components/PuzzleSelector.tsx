'use client';

import { Puzzle } from '@/lib/types';
import { motion } from 'framer-motion';

interface PuzzleSelectorProps {
  puzzles: Puzzle[];
  onSelect: (puzzle: Puzzle) => void;
}

export default function PuzzleSelector({ puzzles, onSelect }: PuzzleSelectorProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'from-green-400 to-green-600';
      case 'medium':
        return 'from-yellow-400 to-orange-600';
      case 'hard':
        return 'from-red-400 to-red-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto"
    >
      {puzzles.map((puzzle, idx) => (
        <motion.button
          key={puzzle.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(puzzle)}
          className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${getDifficultyColor(puzzle.difficulty)} p-6 text-white`}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">{puzzle.name}</h3>
            <div className="flex items-center justify-between">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyBadge(puzzle.difficulty)}`}>
                {puzzle.difficulty.charAt(0).toUpperCase() + puzzle.difficulty.slice(1)}
              </span>
              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                {puzzle.size}×{puzzle.size}
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.button>
      ))}
    </motion.div>
  );
}
