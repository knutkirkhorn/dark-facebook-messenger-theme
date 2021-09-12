// ==UserScript==
// @name         Dark Facebook Messenger Theme
// @description  🕶️ Cool dark red Facebook Messenger theme
// @namespace    https://github.com/knutkirkhorn
// @version      2.0.0
// @license      MIT
// @author       Knut Kirkhorn
// @grant        none
// @homepageURL  https://github.com/knutkirkhorn/dark-facebook-messenger-theme
// @supportURL   https://github.com/knutkirkhorn/dark-facebook-messenger-theme/issues
// @updateURL    https://raw.githubusercontent.com/knutkirkhorn/dark-facebook-messenger-theme/main/favicon-replacer.js
// @match        http://www.facebook.com/*
// @match        https://www.facebook.com/*
// @match        http://www.messenger.com/*
// @match        https://www.messenger.com/*
// ==/UserScript==

// Adds a new <link> html element to override the current favicon
function repalceFavicon(url) {
    const iconElement = document.createElement('link');
    iconElement.rel = 'icon';
    iconElement.href = url;
    document.head.appendChild(iconElement);
}

// Check which favicon to change to
if (window.location.host === 'www.facebook.com') {
    repalceFavicon('https://raw.githubusercontent.com/knutkirkhorn/dark-facebook-messenger-theme/main/media/fb.ico');
} else if (window.location.host === 'www.messenger.com') {
    repalceFavicon('https://raw.githubusercontent.com/knutkirkhorn/dark-facebook-messenger-theme/main/media/messenger.ico');
}
