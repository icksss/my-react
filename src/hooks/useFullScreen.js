import { useRef, useState } from 'react';

const useFullScreen = (cb) => {
    const element = useRef();

    const triggerFull = () => {
        console.log('triggerFull');
        if (element.current) {
            if (element.current.requestFullscreen) {
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen) {
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen) {
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {
                element.current.msRequestFullscreen();
            }
            cb(true);
        }
    };
    const exitFull = () => {
        console.log(document.exitFullscreen);
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        cb(false);
    };
    return { element, triggerFull, exitFull };
};

export default useFullScreen;
