const remote = require('electron').remote;

function closeWindow(){
    var window = remote.getCurrentWindow();
    window.close();
}

function maximizeWindow(){
    var window = remote.getCurrentWindow();
    if(window.isMaximized())
        window.unmaximize();
    else
        window.maximize();
}

function minimizeWindow(){
    var window = remote.getCurrentWindow();
    window.minimize();
}