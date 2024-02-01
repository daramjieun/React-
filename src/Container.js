// 컴포넌트를 감싸는 컴포넌트
// children을 값 처럼 활용
// 💡리액트는 컴포넌트를 다른 컴포넌트의 prop으로 전달 가능
const Container = ({ children }) => {
    return (
        <div style={{ margin: 20, padding: 20, border: "1px solid red" }}>
            {children}
        </div>
    );
};

export default Container;