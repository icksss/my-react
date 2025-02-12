import { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';

function ReactUseTitle() {
    const titleUpdater = useTitle('Loading....');
    setTimeout(() => {
        titleUpdater('HOME');
    }, 5000);
    return <div>ReactUseTitle</div>;
}

export default ReactUseTitle;
