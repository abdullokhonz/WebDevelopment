window.addEventListener('online',  updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

/*var errorText = document.getElementById("error-text");
var text = document.createTextNode("Пожалуйста, подключитесь к интернеру и повторите попытку!");
errorText.appendChild(text);*/

function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";

    document.body.className = condition;

    if (condition == "offline") {
        window.location.href = "./error404.html";
    };

    var homaPage = document.getElementById("more-link");

    if (condition == "online") {
        homaPage.style.display = "inline-block";
    }
    
    homaPage.addEventListener("click", () => {
        if (condition == "online") {
            window.location.href = "./index.html";
        }
    });
};

//*Пожалуйста, подключитесь к интернеру и повторите попытку!