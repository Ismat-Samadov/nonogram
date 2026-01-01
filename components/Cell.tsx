'use client';

import { CellState } from '@/lib/types';
import { motion } from 'framer-motion';

interface CellProps {
  state: CellState;
  onClick: () => void;
  onRightClick: () => void;
  size: number;
}

export default function Cell({ state, onClick, onRightClick, size }: CellProps) {
  const getCellStyles = () => {
    const baseClasses = 'border border-gray-400 cursor-pointer transition-all duration-200 flex items-center justify-center';

    switch (state) {
      case 'filled':
        return `${baseClasses} bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-inner`;
      case 'marked':
        return `${baseClasses} bg-gray-100 hover:bg-gray-200`;
      default:
        return `${baseClasses} bg-white hover:bg-blue-50`;
    }
  };

  const cellSize = size <= 5 ? 'w-16 h-16' : size <= 10 ? 'w-12 h-12' : 'w-8 h-8';

  return (
    <motion.div
      className={`${getCellStyles()} ${cellSize}`}
      onClick={onClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onRightClick();
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {state === 'marked' && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="text-red-500 text-2xl font-bold"
        >
          ×
        </motion.div>
      )}
    </motion.div>
  );
}
