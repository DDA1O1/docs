// Prevent right-click context menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Prevent keyboard shortcuts and dev tools
document.addEventListener('keydown', function(e) {
    // Disable F12, Ctrl+Shift+I, Cmd+Option+I
    if (
        e.key === 'F12' || 
        ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'i') ||
        ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u')
    ) {
        e.preventDefault();
        return false;
    }
});

// Disable dev tools through console
setInterval(() => {
    if (window.devtools.isOpen) {
        window.location.reload();
    }
}, 1000);