'use client';

interface CluesProps {
  clues: number[];
  isRow?: boolean;
  size: number;
}

export default function Clues({ clues, isRow = true, size }: CluesProps) {
  const cellSize = size <= 5 ? 'w-16 h-16' : size <= 10 ? 'w-12 h-12' : 'w-8 h-8';
  const fontSize = size <= 5 ? 'text-sm' : size <= 10 ? 'text-xs' : 'text-[10px]';

  return (
    <div
      className={`flex ${isRow ? 'flex-row' : 'flex-col'} items-center justify-end ${cellSize} gap-1 ${fontSize} font-semibold text-gray-700`}
    >
      {clues.map((clue, idx) => (
        <span
          key={idx}
          className="px-1 py-0.5 bg-gradient-to-br from-purple-100 to-purple-200 rounded shadow-sm"
        >
          {clue}
        </span>
      ))}
    </div>
  );
}
