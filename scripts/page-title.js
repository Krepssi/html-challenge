const match = window.location.pathname.match(/\d+/);
if (match) document.title = `Challenge ${match[0]}`;
