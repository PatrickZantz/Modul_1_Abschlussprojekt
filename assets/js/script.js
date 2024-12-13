document.addEventListener("DOMContentLoaded", function () {
  // Event Listener für den Berechnungsbutton hinzufügen
  document
    .querySelector(".btn-calculate")
    .addEventListener("click", function (e) {
      e.preventDefault(); // Verhindert das Neuladen der Seite
      calc();
    });

  function calc() {
    // Eingabewerte abrufen
    const bodySize = parseFloat(document.getElementById("body-size").value);
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const activity = document.getElementById("activity").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // BMR berechnen (Harris-Benedict-Formel)
    let bmr;
    if (gender === "female") {
      bmr = 655.1 + weight + 1.8 * bodySize - 4.7 * age;
    } else {
      bmr = 66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
    }

    // Aktivitätsfaktor bestimmen
    // Aktivitätsfaktor bestimmen
    let activityFactor;
    switch (activity) {
      case "sleeping":
        activityFactor = 0.95;
        break;
      case "sedentary_lying":
        activityFactor = 1.2;
        break;
      case "sedentary_office":
        activityFactor = 1.5;
        break;
      case "light":
        activityFactor = 1.7;
        break;
      case "moderate":
        activityFactor = 1.9;
        break;
      case "active":
        activityFactor = 2.2;
        break;
      default:
        activityFactor = 1.2;
    }

    // TDEE berechnen
    const tdee = bmr * activityFactor;

    // Ergebnisse anzeigen
    displayResults(bmr, tdee);
  }

  function displayResults(bmr, tdee) {
    const results = document.querySelectorAll(".metabolic-table .value");

    // BMR Ergebnisse
    results[0].textContent = bmr.toFixed(2);
    results[1].textContent = bmr.toFixed(2);

    // TDEE Ergebnisse
    results[2].textContent = tdee.toFixed(2);
    results[3].textContent = tdee.toFixed(2);
  }
});
