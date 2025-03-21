function calculateCashback() {
    var amount = parseFloat(document.getElementById("money").value);
    var cashbackPercent = parseFloat(document.getElementById("cashpercent").value);
    var btn = document.getElementById("btn");

    btn.style.background = "red";
    btn.style.fontSize = "18px";

    const cashback = (amount * cashbackPercent) / 100;

    alert("Your cashback: " + cashback);
}