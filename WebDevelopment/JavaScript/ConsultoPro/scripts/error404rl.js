window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    document.body.className = condition;

    if (condition == "offline") {
        window.location.href = "./error404rl.html";
    };

    var homaPage = document.getElementById("more-link");

    if (condition == "online") {
        homaPage.style.display = "inline-block";
    }
    
    homaPage.addEventListener("click", () => {
        if (condition == "online") {
            window.location.href = "./indexrl.html";
        }
    });
};