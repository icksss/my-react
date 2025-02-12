import useFadeIn from '../hooks/useFadeIn';

function ReactUseFadeIn() {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeOutH2 = useFadeIn(5, 5);
    return (
        <>
            <h1 {...fadeInH1}>hiasdfasdf</h1>
            <h2 {...fadeOutH2}>hi222222222222</h2>
        </>
    );
}

export default ReactUseFadeIn;
