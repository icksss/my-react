import { useEffect } from 'react';

const useNotification = (title, options) => {
    if (!('Notification' in window)) {
        return;
    }

    const fireNotif = () => {
        console.log(Notification.permission);
        if (Notification.permission !== 'granted') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    new Notification(title, options);
                }
            });
        }
        new Notification(title, options);
    };

    return fireNotif;
};

export default useNotification;
