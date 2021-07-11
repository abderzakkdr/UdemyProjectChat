
const { app, BrowserWindow } = require('electron')

function createWindow() { //fonction qui créée une fenêtre et la configure
    const win = new BrowserWindow({ //instancie une fenêtre
        width: 800, //taille en largeur initialement de la fenêtre
        height: 600, //taille en hauteur initialement de la fenêtre
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true //permet à notre application/fenetre d'utiliser des fonctionnalitées node.js
        }
    });
    win.loadFile('index.html'); //Charge la page html à afficher
    win.webContents.openDevTools(); //permet d'ouvrir l'inspecteur d'élément 
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => { //si toutes les fenêtres sont fermé alors j'applique la fonction suivante
    if (process.platform !== 'darwin') { //si le pc n'est pas un mac on quitte l'application (shut-down) sinon non
        app.quit();
    }
})

app.on('activate', () => { //si l'application n'est pas shut-down mais activé comparé a window
    if (BrowserWindow.getAllWindows().length === 0) { //et que tous les fenetre son fermé
        createWindow(); //on créée une fenêtre
    }
})