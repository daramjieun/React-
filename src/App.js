import React from 'react';
import Container from './Container';
import Counter from './Counter';
import MyHeader from './myHeader';

function App() {
  // 1. 자식 컴포넌트에 전달해야 하는 prop을 객체로 만든다. 
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    // initialValue: 5,
  }

  return (
    // 컨테이너 컨포넌트에 children이라는 prop으로 전달된다.
    <Container>
      <div>
        <MyHeader />
        {/* 2. 객체를 스프레드 연산자로 전달 */}
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;