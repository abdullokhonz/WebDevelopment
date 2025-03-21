document.body.style.background = `${getRandomColor()}`;

var labelName = document.createElement('label');
var textLabelName = document.createTextNode("Name:");
labelName.appendChild(textLabelName);
var inputName = document.createElement('input');
labelName.style.color = "white";
labelName.style.fontSize = "24px";
labelName.style.fontWeight = "bold";
labelName.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
labelName.style.padding = "2px 5px";
labelName.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
inputName.style.width = "400px";
inputName.style.height = "30px";
inputName.style.color = "white";
inputName.style.fontSize = "16px";
inputName.style.fontWeight = "bold";
inputName.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
inputName.style.background = "black";
inputName.style.border = "2px solid white";
inputName.style.borderRadius = "8px";
inputName.style.outline = "none";
inputName.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
inputName.style.paddingLeft = "8px";
inputName.type = 'text';
inputName.id = 'name';
inputName.placeholder = 'Abdullo';
inputName.required = true;
document.body.appendChild(labelName);
document.body.appendChild(inputName);

var labelEmail = document.createElement('label');
var textLabelEmail = document.createTextNode("Email:");
labelEmail.appendChild(textLabelEmail);
var inputEmail = document.createElement('input');
labelEmail.style.color = "white"
labelEmail.style.fontSize = "24px";
labelEmail.style.fontWeight = "bold";
labelEmail.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
labelEmail.style.padding = "2px 5px";
labelEmail.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
inputEmail.style.width = "400px";
inputEmail.style.height = "30px";
inputEmail.style.color = "white";
inputEmail.style.fontSize = "16px";
inputEmail.style.fontWeight = "bold";
inputEmail.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
inputEmail.style.background = "black";
inputEmail.style.border = "2px solid white";
inputEmail.style.borderRadius = "8px";
inputEmail.style.outline = "none";
inputEmail.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
inputEmail.style.paddingLeft = "8px";
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.placeholder = 'abdullo@gmail.com';
inputEmail.required = 'required';
document.body.appendChild(labelEmail);
document.body.appendChild(inputEmail);

var labelPassword = document.createElement('label');
var textLabelPassword = document.createTextNode("Password:");
labelPassword.appendChild(textLabelPassword);
var inputPassword = document.createElement('input');
labelPassword.style.color = "white";
labelPassword.style.fontSize = "24px";
labelPassword.style.fontWeight = "bold";
labelPassword.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
labelPassword.style.padding = "2px 5px";
labelPassword.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
inputPassword.style.width = "400px";
inputPassword.style.height = "30px";
inputPassword.style.color = "white";
inputPassword.style.fontSize = "16px";
inputPassword.style.fontWeight = "bold";
inputPassword.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
inputPassword.style.background = "black";
inputPassword.style.border = "2px solid white";
inputPassword.style.borderRadius = "8px";
inputPassword.style.outline = "none";
inputPassword.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
inputPassword.style.paddingLeft = "8px";
inputPassword.type = 'password';
inputPassword.id = 'confirmPassword'
inputPassword.placeholder = '1234';
inputPassword.required = 'required';
document.body.appendChild(labelPassword);
document.body.appendChild(inputPassword);

var buttonRegistration = document.createElement('button');
buttonRegistration.innerHTML = "Registration";
buttonRegistration.style.color = "white";
buttonRegistration.style.fontSize = "18px";
buttonRegistration.style.fontWeight = "bold";
buttonRegistration.style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif  ";
buttonRegistration.style.border = "2px solid white";
buttonRegistration.style.padding = "12px 24px";
buttonRegistration.style.background = "black";
buttonRegistration.style.borderRadius = "8px";
buttonRegistration.style.boxShadow = "5px 5px 20px 10px rgba(0, 0, 0, 0.5)";
buttonRegistration.type = 'submit';
document.body.appendChild(buttonRegistration);

labelName.classList.add("qwerty");
inputName.classList.add("qwerty");
labelEmail.classList.add("qwerty");
inputEmail.classList.add("qwerty");
labelPassword.classList.add("qwerty");
inputPassword.classList.add("qwerty");
buttonRegistration.classList.add("qwerty");

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

buttonRegistration.addEventListener('click', () => {
    document.body.style.background = `${getRandomColor()}`;
})