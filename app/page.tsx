'use client';

import { useState, useEffect } from 'react';
import { Puzzle, GameState } from '@/lib/types';
import { puzzles } from '@/lib/puzzles';
import { initializeGame, toggleCell, checkSolution, formatTime } from '@/lib/gameLogic';
import Grid from '@/components/Grid';
import GameStats from '@/components/GameStats';
import PuzzleSelector from '@/components/PuzzleSelector';
import WinModal from '@/components/WinModal';
import { motion } from 'framer-motion';

export default function Home() {
  const [selectedPuzzle, setSelectedPuzzle] = useState<Puzzle | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [showWinModal, setShowWinModal] = useState(false);

  useEffect(() => {
    if (gameState && !gameState.isComplete) {
      const interval = setInterval(() => {
        setElapsedTime(Date.now() - gameState.startTime);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [gameState]);

  const handlePuzzleSelect = (puzzle: Puzzle) => {
    setSelectedPuzzle(puzzle);
    setGameState(initializeGame(puzzle));
    setElapsedTime(0);
    setShowWinModal(false);
  };

  const handleCellClick = (row: number, col: number, fillMode: boolean) => {
    if (!gameState || !selectedPuzzle || gameState.isComplete) return;

    const newGrid = toggleCell(gameState.grid, row, col, fillMode);
    const isComplete = checkSolution(newGrid, selectedPuzzle.solution);

    const newGameState: GameState = {
      ...gameState,
      grid: newGrid,
      moves: gameState.moves + 1,
      isComplete,
      endTime: isComplete ? Date.now() : undefined,
    };

    setGameState(newGameState);

    if (isComplete) {
      setShowWinModal(true);
    }
  };

  const handleReset = () => {
    if (selectedPuzzle) {
      setGameState(initializeGame(selectedPuzzle));
      setElapsedTime(0);
      setShowWinModal(false);
    }
  };

  const handleBack = () => {
    setSelectedPuzzle(null);
    setGameState(null);
    setElapsedTime(0);
    setShowWinModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
            Nonogram
          </h1>
          <p className="text-xl text-gray-700 mb-2">
            Fill in the grid based on the number clues
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-600 rounded"></span>
              Left click to fill
            </span>
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 bg-gray-100 border border-gray-400 rounded flex items-center justify-center text-red-500">×</span>
              Right click to mark
            </span>
          </div>
        </motion.div>

        {/* Game Area */}
        {!selectedPuzzle ? (
          <>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-center mb-8 text-gray-800"
            >
              Choose a Puzzle
            </motion.h2>
            <PuzzleSelector puzzles={puzzles} onSelect={handlePuzzleSelect} />
          </>
        ) : gameState ? (
          <div className="flex flex-col items-center">
            <GameStats
              moves={gameState.moves}
              time={formatTime(elapsedTime)}
              onReset={handleReset}
              onBack={handleBack}
            />
            <Grid
              puzzle={selectedPuzzle}
              grid={gameState.grid}
              onCellClick={handleCellClick}
            />

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">How to Play</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Numbers on the sides indicate consecutive filled cells in that row/column</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Multiple numbers mean there&apos;s at least one empty cell between groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Left-click cells to fill them, right-click to mark cells you want to keep empty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>Complete the puzzle by filling all correct cells!</span>
                </li>
              </ul>
            </motion.div>
          </div>
        ) : null}

        {/* Win Modal */}
        <WinModal
          isOpen={showWinModal}
          moves={gameState?.moves ?? 0}
          time={formatTime(gameState?.endTime ? gameState.endTime - gameState.startTime : 0)}
          onPlayAgain={handleReset}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}
