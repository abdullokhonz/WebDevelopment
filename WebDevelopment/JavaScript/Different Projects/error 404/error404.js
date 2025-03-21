window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";
    document.body.className = condition;
    if (condition == "offline") {
        window.location.href = "error404.html";
    }
    if (condition == "online") {
        window.location.href = "index.html";
    }
}