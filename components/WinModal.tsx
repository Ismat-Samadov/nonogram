'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface WinModalProps {
  isOpen: boolean;
  moves: number;
  time: string;
  onPlayAgain: () => void;
  onBack: () => void;
}

export default function WinModal({ isOpen, moves, time, onPlayAgain, onBack }: WinModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-1 rounded-3xl shadow-2xl max-w-md w-full"
          >
            <div className="bg-white rounded-3xl p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-8xl mb-4"
              >
                🎉
              </motion.div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Congratulations!
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                You solved the puzzle!
              </p>

              <div className="flex justify-center gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 px-6 py-4 rounded-xl">
                  <div className="text-sm text-gray-600 font-medium">Time</div>
                  <div className="text-2xl font-bold text-blue-900">{time}</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 px-6 py-4 rounded-xl">
                  <div className="text-sm text-gray-600 font-medium">Moves</div>
                  <div className="text-2xl font-bold text-purple-900">{moves}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onPlayAgain}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Play Again
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onBack}
                  className="flex-1 px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Choose Puzzle
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
