import React, { useState } from 'react';
import './App.css';

function Cell({ row, col, isBlack, isSelected, onClick }) {
  const cellClass = `cell ${isBlack ? 'black' : 'white'} ${isSelected ? 'selected' : ''}`;

  return (
      <div
          className={cellClass}
          onClick={() => onClick(row, col)}
      />
  );
}

function App() {
  const [selectedCell, setSelectedCell] = useState(null);

  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  const isSelected = (row, col) => {
    return selectedCell && selectedCell.row === row && selectedCell.col === col;
  };

  const renderBoard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const cells = [];
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        cells.push(
            <Cell
                key={`${row}-${col}`}
                row={row}
                col={col}
                isBlack={isBlack}
                isSelected={isSelected(row, col)}
                onClick={handleCellClick}
            />
        );
      }
      board.push(<div key={row} className="row">{cells}</div>);
    }
    return board;
  };

  return (
      <div className="chess-board">
        {renderBoard()}
      </div>
  );
}

export default App;
