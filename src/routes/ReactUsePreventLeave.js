import usePreventLeave from '../hooks/usePreventLeave';

function ReactUsePreventLeave() {
    const { enablePreve, disablePreve } = usePreventLeave();
    return (
        <div>
            <button onClick={enablePreve}> protect </button>
            <button onClick={disablePreve}>un protect </button>
        </div>
    );
}

export default ReactUsePreventLeave;
