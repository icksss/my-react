import useConfirm from '../hooks/useConfirm';

function ReactUseConfirm() {
    const conCallBack = () => {
        console.log('ok run after function ');
    };
    const rejectCallBack = () => {
        console.log('reject callback');
    };
    const con = useConfirm('ok?', conCallBack, rejectCallBack);

    return (
        <div>
            <h1>hi</h1>
            <button onClick={con}> click me</button>
        </div>
    );
}
export default ReactUseConfirm;
