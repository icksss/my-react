import useNotification from '../hooks/useNotification';

function ReactUseNotification() {
    const triggerNotif = useNotification('Hello', {
        body: 'i love you'
    });

    return (
        <div>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
}

export default ReactUseNotification;
