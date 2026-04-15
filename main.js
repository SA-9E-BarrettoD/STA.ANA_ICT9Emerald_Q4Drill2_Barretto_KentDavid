function computeHeat() {
    let t = document.getElementById("temp").value;
    let h = document.getElementById("humid").value;
    let output = document.getElementById("output");

    if (t === "" || h === "" || isNaN(t) || isNaN(h)) {
        output.innerHTML = "Please enter valid numbers.";
        return;
    }

    t = Number(t);
    h = Number(h);

    // Simple Heat Index Approximation
    let heatIndex = t + (0.33 * h) - 4;

    let status = "";

    if (heatIndex < 27) {
        status = "Comfortable";
    } 
    else if (heatIndex < 32) {
        status = "Caution: Fatigue possible";
    } 
    else if (heatIndex < 41) {
        status = "Extreme Caution: Heat cramps possible";
    } 
    else if (heatIndex < 54) {
        status = "Danger: Heat exhaustion likely";
    } 
    else {
        status = "Extreme Danger: Heat stroke possible!";
    }

    output.innerHTML = `
        Heat Index: <b>${heatIndex.toFixed(2)}°C</b><br>
        ${status}
    `;
}