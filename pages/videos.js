/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const quitButton = document.getElementById('quit-btn');
const btn = document.getElementById('browse-video');
const videoPlayerElement = document.getElementById('videoPlayer');

quitButton.addEventListener('click', () => {
    window.electronAPI.closeApplication();
});

btn.addEventListener('click', async () => {
    const filePath = await window.electronAPI.openFile()
    // filePathElement.innerText = filePath
    videoPlayerElement.src = filePath;
    videoPlayerElement.style.display = "block";
})