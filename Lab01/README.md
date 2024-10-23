# Chess Board React App

Цей проект реалізує шахову дошку з можливістю вибору клітинки за допомогою React.

## Код `App.js`

```javascript
import React, { useState } from 'react';
import './App.css';

function App() {
  // Стан для відслідковування вибраної клітинки
  const [selectedCell, setSelectedCell] = useState(null);

  // Функція для вибору клітинки
  const handleCellClick = (row, col) => {
    setSelectedCell({ row, col });
  };

  // Функція для перевірки, чи клітинка вибрана
  const isSelected = (row, col) => {
    return selectedCell && selectedCell.row === row && selectedCell.col === col;
  };

  // Створення дошки 8x8
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
