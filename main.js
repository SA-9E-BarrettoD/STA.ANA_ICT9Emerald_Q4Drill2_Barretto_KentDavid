function computeHeat() {
    let t = document.getElementById("temp").value;
    let h = document.getElementById("humid").value;

    if (t === "" || h === "" || isNaN(t) || isNaN(h)) {
        alert("⚠️ Please enter valid numbers.");
        return;
    }

    t = Number(t);
    h = Number(h);

    let heatIndex = t + (0.33 * h) - 4;

    let status = "";

    if (heatIndex < 27) {
        status = "Comfortable";
    } 
    else if (heatIndex < 32) {
        status = "Caution";
    } 
    else if (heatIndex < 41) {
        status = "Extreme Caution";
    } 
    else if (heatIndex < 54) {
        status = "Danger";
    } 
    else {
        status = "Extreme Danger";
    }

    alert(
        "Heat Index: " + heatIndex.toFixed(2) + "°C\n" + status
    );
}