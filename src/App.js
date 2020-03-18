import React from 'react';
import CommentList from './components/CommentList/CommentList';
import Form from './components/Form/Form';

function App() {
  const comments = [
    'テスト1',
    'テスト2',
    'テスト3',
  ];

  return (
    <div className="App">
      <Form onSubmit={(body) => {
        console.log('body? : ', body);
      }} />
      <CommentList comments={comments}></CommentList>
    </div>
  );
}

export default App;