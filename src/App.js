import React from 'react';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <Button onClickHandler={() => {
        console.log('クリックした!');
      }}>
        コメントする
      </Button>
    </div>
  );
}

export default App;