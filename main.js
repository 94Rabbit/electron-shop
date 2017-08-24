const electron = require('electron');
const {ipcMain,dialog} = require('electron');
const {app} = electron;

const {BrowserWindow} = electron;

var mainWindow = null;
var mapWin = null;
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1200,
        // devTools:true,
        frame:false

    });
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    //监听是否打开提示框
    ipcMain.on('open-dialog', (event) => {
            var options = {
                type:'info',
                title:'关闭程序',
                message:'确定关闭我的商城？',
                buttons:['确定','取消']
            };
            dialog.showMessageBox(options,(index)=>{

                event.sender.send('selection',index);
            });

    });
    //处理前端传入的选项来判断是否关闭窗体
    ipcMain.on('close-win',(event,arg)=> {
        if (arg === 0 ) {

            mainWindow.close();

        }
    });
    //监听minWin行为
    ipcMain.on('minWin',(event,arg)=>{
        mainWindow.minimize();
    });
    //进行定位:
    ipcMain.on('locate',(event,arg)=>{
        if(arg === 'location'){
             mapWin = new BrowserWindow({
                parent:mainWindow,
                top:true,
                width:600,
                height:600,
                frame:false
            });


            mapWin.loadURL('file://' + __dirname + '/map.html');
            mapWin.show();
            mapWin.setTitle('My position');
            mapWin.setAutoHideMenuBar(true);
        }
    });
    //监听map操作
    ipcMain.on('close-map',(event,arg)=>{
      mapWin.close();
    });
    ipcMain.on('max-map',(event,arg)=>{
        mapWin.maximize();
        event.sender.send('change-icon','ok');
        // alert('123');
    });
});
