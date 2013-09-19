// Remove side padding when embedding pages in an iFrame
if (window.self !== window.top) {
    document.body.className = 'embedded';
} else {
    document.body.className = '';
}