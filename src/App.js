import React from 'react';
import Button from './components/Button/Button';
import CommentList from './components/CommentList/CommentList';

function App() {
  const comments = [
    'テスト1',
    'テスト2',
    'テスト3',
  ];

  return (
    <div className="App">
      <Button onClickHandler={() => {
        console.log('クリックした!');
      }}>
        コメントする
      </Button>
      <CommentList comments={comments}></CommentList>
    </div>
  );
}

export default App;