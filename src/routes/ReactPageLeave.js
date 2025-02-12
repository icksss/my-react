import usePageLeave from '../hooks/usePageLeave';

function ReactUsePreventLeave() {
    const hander = (event) => {
        // console.log('D`ont leave handler! event : ', event);
        const { clientY } = event;
        if (clientY <= 0) {
            console.log('가지마!');
        }
    };
    usePageLeave(hander);
    return <div> ReactUsePageLeave</div>;
}

export default ReactUsePreventLeave;
