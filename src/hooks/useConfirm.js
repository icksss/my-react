const useConfirm = (message, callback, rejectCallBack) => {
    console.log('useconfirm');
    if (callback && typeof callback !== 'function') {
        return;
    }
    const resultFnc = () => {
        if (confirm(message)) {
            callback();
        } else {
            if (rejectCallBack && typeof rejectCallBack !== 'function') {
                rejectCallBack();
            }
        }
    };
    return resultFnc;
};

export default useConfirm;
