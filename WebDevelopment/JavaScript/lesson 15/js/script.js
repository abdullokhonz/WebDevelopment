/*function greeting() {
  var getName = document.getElementById("someName").value;
  var getSurname = document.getElementById("someSurname").value;
  alert(`${getName} ${getSurname} your registration is succesfull`);
}*/

function greeting() {
  var getName = document.getElementById("someName").value;
  var getSurname = document.getElementById("someSurname").value;
  document.write(`${getName} ${getSurname} your registration is succesfull`);
}