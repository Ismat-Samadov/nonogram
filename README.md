# Nonogram - Picture Logic Puzzle Game

A beautiful and interactive Nonogram (Picross/Griddlers) puzzle game built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Multiple Difficulty Levels**: Easy (5×5), Medium (10×10), and Hard (15×15) puzzles
- **Attractive Design**: Modern gradient-based UI with smooth animations using Framer Motion
- **Intuitive Controls**:
  - Left-click to fill cells
  - Right-click to mark cells as empty
- **Game Stats**: Track your moves and time
- **Win Detection**: Automatic puzzle completion detection with celebration modal
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ismat-Samadov/nonogram.git
cd nonogram
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## How to Play

1. **Understand the Clues**: Numbers on the sides of the grid indicate consecutive filled cells in that row or column
2. **Multiple Groups**: Multiple numbers mean there's at least one empty cell between groups
3. **Fill Cells**: Left-click cells to fill them with color
4. **Mark Empty**: Right-click to mark cells you want to keep empty with an X
5. **Complete the Puzzle**: Fill all correct cells to reveal the hidden picture!

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Emoji-based for cross-platform compatibility

## Project Structure

```
nonogram/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main game page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Cell.tsx       # Individual grid cell
│   ├── Clues.tsx      # Number clues display
│   ├── Grid.tsx       # Game grid
│   ├── GameStats.tsx  # Stats display (time, moves)
│   ├── PuzzleSelector.tsx  # Puzzle selection screen
│   └── WinModal.tsx   # Victory modal
├── lib/               # Game logic and utilities
│   ├── types.ts       # TypeScript type definitions
│   ├── puzzles.ts     # Puzzle data
│   └── gameLogic.ts   # Core game logic
└── public/            # Static assets
    └── favicon.svg    # App icon
```

## Available Puzzles

### Easy (5×5)
- Heart
- House
- Tree

### Medium (10×10)
- Cat
- Star

### Hard (15×15)
- Butterfly

## Contributing

Feel free to submit issues and enhancement requests!

## License

ISC

## Author

Ismat Samadov

## Acknowledgments

- Inspired by the classic Nonogram/Picross puzzle games
- Built with modern web technologies for the best user experience
