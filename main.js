'use strict'

const electron = require('electron')

// Module to control application life.
const app = electron.app

// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const platform = require('os').platform()
const url = require('url')
const dialog = electron.dialog

// Modules to create app tray icon
const Menu = electron.Menu
const Tray = electron.Tray

// Create variables for icons to prevent disappearing icon du to JS garbage collection
// https://electronjs.org/docs/faq#my-apps-windowtray-disappeared-after-a-few-minutes
let trayIcon = null
let appIcon = null

// Request lock to allow only one instance
// of the app running at the time.
const gotTheLock = app.requestSingleInstanceLock()

// Determine appropriate icon for platform
if (platform == 'darwin') {
  trayIcon = path.join(__dirname, 'src', 'assets/grease-the-groove-icon.png')
} else if (platform == 'win32') {
  trayIcon = path.join(__dirname, 'src', 'assets/grease-the-groove-icon.ico')
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

// Keep a reference for dev mode
let dev = false

if (process.defaultApp || /[\\/]electron-prebuilt[\\/]/.test(process.execPath) || /[\\/]electron[\\/]/.test(process.execPath)) {
  dev = true
}

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    'auto-hide-menu-bar': true,
    icon: trayIcon,
    height: 667,
    show: false,
    title: 'Grease the Groove',
    width: 375,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // Auto-hide main app menu - show it after pressing 'Alt' key
  mainWindow.setAutoHideMenuBar(true)

  // and load the index.html of the app.
  let indexPath

  if (dev && process.argv.indexOf('--noDevServer') === -1) {
    indexPath = url.format({
      protocol: 'http:',
      host: 'localhost:8080',
      pathname: 'index.html',
      slashes: true
    })
  } else {
    indexPath = url.format({
      protocol: 'file:',
      pathname: path.join(__dirname, 'dist', 'index.html'),
      slashes: true
    })
  }

  // Create tray icon
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
      label: 'Close app',
      click: () => {
        mainWindow.close()
      }
    }
  ])

  // Set title for tray icon
  appIcon.setTitle('Grease the Groove')

  // Set toot tip for tray icon
  appIcon.setToolTip('Grease the Groove')

  // Create RightClick context menu
  appIcon.setContextMenu(contextMenu)

  // Always highlight the tray icon
  appIcon.setHighlightMode('always')

  // The tray icon is not destroyed
  appIcon.isDestroyed(false)

  // Restore (open) app after clicking on tray icon
  // if window is already open, minimize it to system tray
  appIcon.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
  })

  // Function for clearing cache
  const win = BrowserWindow.getAllWindows()[0]
  const ses = win.webContents.session
  const clearAppCache = () => {
    ses.clearCache(() => {
      dialog.showMessageBox({type: 'info', buttons: ['OK'], message: 'Cache cleared.'})
    })
  }

  // Template for menu
  const menuTemplate = [
    {
      role: 'App',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'}
      ]
    },
    {
      label: 'Maintenance',
      submenu: [
        {
          label: 'Clear cache',
          click: () => {clearAppCache()}
        },
        {
          label: 'Clear storage data',
          click: () => {mainWindow.webContents.session.clearStorageData(dialog.showMessageBox({ type: 'info', buttons: ['OK'], message: 'Storage data cleaned.'}))}
        },
        {
          label: 'Check cache size',
          click: () => {mainWindow.webContents.session.getCacheSize((size) => dialog.showMessageBox({type: 'info', buttons: ['OK'], message: `Cache size is: ${size} bytes.`}))}
        }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {require('electron').shell.openExternal('https://github.com/alexdevero/grease-the-groove-app')}
        },
        {
          label: 'Author',
          click: () => {require('electron').shell.openExternal('https://alexdevero.com')}
        }
      ]
    }
  ]

  // Build menu from menuTemplate
  const menu = Menu.buildFromTemplate(menuTemplate)

  // Set menu to menuTemplate
  Menu.setApplicationMenu(menu)

  mainWindow.loadURL(indexPath)

  // Don't show until we are ready and loaded
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()

    // Open the DevTools automatically if developing
    if (dev) {
      mainWindow.webContents.openDevTools()
    }
  })

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  // Minimize window to system tray
  mainWindow.on('minimize',function(event){
      event.preventDefault()
      // mainWindow.minimize()
      mainWindow.hide()
  })
}

// Check if this is first instance of the app running.
// If not, block it. If yes, allow it.
if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (win) {
        if (win.isMinimized()) win.restore()
            win.focus()
    }
  })

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
