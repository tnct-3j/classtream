const electron = require('electron')
const path = require('path')

// TODO: リファクタリング
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const MAIN_HTML = path.join('file://', __dirname, 'main.html')
const CHILD_PADDING = 50

const onAppReady = function () {
  const screen = electron.screen
  const size = screen.getPrimaryDisplay().size

  let parent = new BrowserWindow({
    left: 0,
    top: 0,
    width: size.width,
    height: size.height,
    transparent: true,
    frame: false,
    resizable: false,
    alwaysOnTop: true
  })

  parent.maximize();
  parent.setIgnoreMouseEvents(true);

  parent.once('close', () => {
    parent = null
  })

  parent.loadURL(MAIN_HTML)
}

app.on('ready', () => setTimeout(onAppReady, 500))

