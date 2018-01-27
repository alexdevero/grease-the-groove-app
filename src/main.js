const electron = require('electron')

// Module to control application life.
const app = electron.app

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Modules to create app tray icon
const Menu = electron.Menu
const Tray = electron.Tray

const path = require('path')
const url = require('url')
const execa = require('execa')

// const trayIcon = './src/assets/grease-the-groove-icon.png'
const trayIcon = path.join(__dirname, 'assets/grease-the-groove-icon.png')

function runParcel() {
  return new Promise(resolve => {
    let output = ''

    const parcelProcess = execa('parcel', ['./src/index.html'])
    const concat = chunk => {
      output += chunk
      console.log(output)

      if (output.includes('Built in ')) {
        parcelProcess.stdout.removeListener('data', concat)

        console.log(output)

        resolve()
      }
    }

    parcelProcess.stdout.on('data', concat)
  })
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 375,
    height: 667,
    title: 'Grease the Groove',
    icon: trayIcon
  })

  // Create tray icon
  // https://electronjs.org/docs/api/tray
  appIcon = new Tray(trayIcon)

  // Create RightClick context menu for tray icon
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Restore app',
      click: () => {
        mainWindow.show()
      }
    },
    {
      label: 'Quit',
      click: () => {
        mainWindow.close()
      }
    }
  ])

  // Set title for tray icon
  appIcon.setToolTip('Grease the Groove')
  // Create RightClick context menu
  appIcon.setContextMenu(contextMenu)

  // Restore (open) app after clicking on tray icon
  // if window is already open, minimize it to system tray
  appIcon.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })

  await runParcel()
  // and load the index.html of the app.
  mainWindow.loadURL(`http://localhost:1234`)

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // Minimize window to system tray
  // https://stackoverflow.com/questions/37828758/electron-js-how-to-minimize-close-window-to-system-tray-and-restore-window-back#38980563
  mainWindow.on('minimize',function(event){
      event.preventDefault()
      // mainWindow.minimize()
      mainWindow.hide()
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
