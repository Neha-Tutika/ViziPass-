const { ipcRenderer, contextBridge } = require('electron');

// Expose safe methods to the renderer
contextBridge.exposeInMainWorld('electronAPI', {
  goBack: () => ipcRenderer.send('navigate-back'),
  goForward: () => ipcRenderer.send('navigate-forward'),
});