//var tag = document.createElement("p");
//var text = document.createTextNode("Hello Wolrd!");
//tag.appendChild(text);
//var res = tag.innerHTML;
//document.write(res);
//
//var div1 = document.querySelector("div.main");
//var div2 = document.querySelector("div");
//var div3 = document.querySelector("div");
//div1.className = "third";
//div1.classList.remove("third");
//div1.classList.add("second");


//var btn = document.createElement("button");
//var text = document.createTextNode("Ok");
//btn.appendChild(text);
//btn.style.backgroundColor = "red";
//var res = tag.innerHTML;
//document.write(res);

//var counter = document.getElementsByClassName("count");
//function counter1(start, end, duration) {
//    let current = start;
//    let range = end - start;
//    
//}

var isTrue = (5 == 5)?console.log(2):console.log(9);

var btn = document.createElement("button");
var text = document.createTextNode("Ok");
btn.appendChild(text);
btn.style.backgroundColor = "red";
btn.style.border = "2px solid black";
btn.style.padding = "10px 25px";
btn.style.margin = "25px";
btn.style.fontSize = "18px";
btn.style.fontWeight = "bold";
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    alert("Ok");
    prompt("Ok");
    confirm("Ok");
})