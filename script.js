function loadGame(container, url) {
    container.innerHTML = `
        <iframe 
            src="${url}"
            class="game-frame"
            loading="lazy">
        </iframe>

        <a href="${url}" target="_blank" class="play-button">
            Play Fullscreen
        </a>
    `;
}
