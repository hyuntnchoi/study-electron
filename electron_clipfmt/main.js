const electron = require('electron')
const path = require('path')
const url = require('url')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
app.on('ready', createWindow)
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function () {
	if (mainWindow === null) createWindow()
})

// 화면을 생성하고 콘텐츠를 읽어 들입니다.
function createWindow () {
	mainWindow = new BrowserWindow({
		width: 800, 
		height: 600,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
		}
	})
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
	// 화면이 닫혔을 때의 처리
	mainWindow.on('closed', function () {
		mainWindow = null
	})
}
