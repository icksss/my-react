import useAxios from '../hooks/useAxios';
function ReactUseAxios() {
    const { loading, data, error, refetch } = useAxios({
        url: 'https://yts.mx/api/v2/list_movies.json'
    });
    //console.log('loading :', loading, 'data : ', data, 'error : ', error);
    return (
        <div>
            <h1>{data && data.status}</h1>
            <h1>{loading && 'Loading'}</h1>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}

export default ReactUseAxios;
