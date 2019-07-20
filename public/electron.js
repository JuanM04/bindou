const { app, BrowserWindow, ipcMain } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, '../assets/icon.png'),
    width: 1000,
    height: 562,
    fullscreen: isDev ? null : true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.removeMenu()

  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)

  if (isDev) mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => mainWindow = null)
}



app.on('ready', createWindow)

app.on('window-all-closed', () => app.quit())

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('close', () => app.quit())