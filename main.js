var app = require('app');
var BrowserWindow = require('browser-window');

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 900, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
