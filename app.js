const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
    win = new BrowserWindow({width:800, height:600});

    win.loadURL(url.format({
        protocol: 'file:',
        pathname: path.join(__dirname, path.join("windows", "index.html")),
        slashes: true
    }));


    // close the master BrowserWindow
    win.on('close', () => {
        win = null;
    });
}

//call function createWindow
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if(win === null){
        createWindow();
    }
});
