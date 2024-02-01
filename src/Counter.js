import React, { useState } from 'react';
import OddEvenResult from './OddEvenResult';

// 3. 비 구조화 할당으로 받아올 수 있다.
// 객체에서 initinialValue 프로퍼티 값만 꺼내서 쓴다.
// 하지만 프로퍼티 값이 없다면? defaul props 만들어 둔다.
const Counter = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <OddEvenResult count={count} />
        </div>
    )
};

// 💡 default Props 설정 (기본값 설정해서 에러 방지)
Counter.defaultProps = {
    initialValue: 0,
}

export default Counter;