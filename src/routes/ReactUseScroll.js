import useScroll from '../hooks/useScroll';

function ReactUseScroll() {
    const callback = () => {
        // console.log('할일 쓰기');
    };
    const state = useScroll(callback);
    const { y } = state;
    return (
        <>
            <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
                hi
            </h1>
        </>
    );
}

export default ReactUseScroll;
