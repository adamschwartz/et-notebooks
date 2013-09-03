// Remove side padding when embedding pages in an iFrame
if (window.parent !== window.top) {
    document.body.className = 'embedded';
}