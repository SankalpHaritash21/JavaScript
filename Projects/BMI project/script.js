const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const ww = document.querySelector("#ww");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "plz give valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "plz give valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) ww.innerHTML = "under weight";
    else if (bmi > 24.9) ww.innerHTML = "Over weight";
    else ww.innerHTML = "Normal";
  }
});
