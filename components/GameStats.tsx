'use client';

import { motion } from 'framer-motion';

interface GameStatsProps {
  moves: number;
  time: string;
  onReset: () => void;
  onBack: () => void;
}

export default function GameStats({ moves, time, onReset, onBack }: GameStatsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center justify-center gap-4 mb-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl">
        <span className="text-2xl">⏱️</span>
        <div>
          <div className="text-xs text-gray-600 font-medium">Time</div>
          <div className="text-lg font-bold text-blue-900">{time}</div>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl">
        <span className="text-2xl">🎯</span>
        <div>
          <div className="text-xs text-gray-600 font-medium">Moves</div>
          <div className="text-lg font-bold text-purple-900">{moves}</div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Reset
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
      >
        Back
      </motion.button>
    </motion.div>
  );
}
