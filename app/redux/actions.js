const electron = window.require('electron')
const {ipcRenderer} = electron

export function setMyCounter(val) {
    return { type: 'myCounter', payload: val }
}

export function init() {
    return (dispatch, getState) => {
        ipcRenderer.on('projectDir', (event, val) => {
            dispatch({
                type: 'projectDir',
                payload: val
            })
        })
        ipcRenderer.send('projectDir', 'arg1')
    }
}