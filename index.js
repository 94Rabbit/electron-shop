const electron = require('electron');
// 控制应用生命周期的模块
const {app} = electron;
// 创建本地浏览器窗口的模块
const {BrowserWindow} = electron;

var mainWindow = null;
// 当Electron完成初始化并且已经创建了浏览器窗口，则该方法将会被调用。
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 400
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // 打开开发工具页面
    // mainWindow.webContents.openDevTools()
});

