const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");




function addTask() {
    if (inputBox.value === "") {
        alert("Добавьте задачу");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        span.style.marginLeft = "5px";
        li.style.background = "#7da9f4";
        span.style.background = "#ca3b2c";
        span.style.padding = "12px 25px";
        li.style.borderRadius = "30px";
        li.style.marginBottom = "5px";
        //listContainer.style.display = "flex";
        //listContainer.style.alignItems = "center";
        //listContainer.style.justifyContent = "space-between";
        li.classList.add("rowjs");
        span.classList.add("rowjs");
        span.addEventListener('click', () => {
            li.style.display = "none";
        })
    }
    inputBox.value = "";
}